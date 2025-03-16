package order

// 新增Redis和Kafka处理逻辑
import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/util/gconv"
	"github.com/segmentio/kafka-go"
	"golershop.cn/internal/consts"
	"golershop.cn/internal/dao"
	"golershop.cn/internal/model/do"
	"golershop.cn/internal/model/entity"
	kafkautil "golershop.cn/utility/kafka"
	"time"
)

func ProcessAsync(ctx context.Context, orderId string, orderInfo *entity.OrderInfo) error {
	// 使用订单专用Redis配置组
	redisClient := g.Redis("order") // 对应config.yaml中的order配置组

	// 序列化订单数据（保持原do.OrderBase结构）
	jsonData, err := json.Marshal(orderInfo)

	if err != nil {
		return gerror.Wrap(err, "订单数据序列化失败")
	}

	// 写入Redis（有效期24小时）
	redisKey := fmt.Sprintf("order:%s", orderId)
	if err := redisClient.SetEX(ctx, redisKey, gconv.String(jsonData), int64(24*time.Hour)); err != nil {
		return gerror.Wrap(err, "Redis写入失败")
	}

	// 发送订单ID到Kafka（保持现有kafka配置）
	kafkaMsg := kafka.Message{
		Key:   []byte(orderId),
		Value: []byte(orderId),
	}
	if err := kafkautil.Producer.WriteMessages(ctx, kafkaMsg); err != nil {
		return gerror.Wrap(err, "Kafka消息发送失败")
	}

	return nil
}

func consumeOrder(ctx context.Context) {

	broker, _ := g.Cfg().Get(ctx, "kafka.brokers")
	topic, _ := g.Cfg().Get(ctx, "kafka.topic")
	consumer := kafka.NewReader(kafka.ReaderConfig{
		Brokers:  gconv.Strings(broker),
		Topic:    gconv.String(topic),
		GroupID:  "order_persist_worker",
		MinBytes: 10e3,
		MaxBytes: 10e6,
	})

	for {
		msg, err := consumer.FetchMessage(ctx)
		if err != nil {
			g.Log().Error(ctx, "获取Kafka消息失败:", err)
			continue
		}

		orderId := string(msg.Value)

		// 从order配置组获取Redis连接
		jsonData, err := g.Redis("order").Get(ctx, "order:"+orderId)
		if err != nil {
			g.Log().Error(ctx, "获取Redis数据失败:", err)
			continue
		}

		// 反序列化处理
		var orderInfo *entity.OrderInfo
		if err := json.Unmarshal([]byte(gconv.String(jsonData)), &orderInfo); err != nil {
			g.Log().Error(ctx, "订单数据反序列化失败:", err)
			continue
		}

		_, err = dao.OrderBase.Edit(ctx, do.OrderBase{OrderId: orderId, OrderStateId: orderInfo.OrderStateId}, &do.OrderBase{OrderStateId: consts.ORDER_PAID_STATE_YES})
		_, err = dao.OrderInfo.Edit(ctx, do.OrderInfo{OrderId: orderId, OrderStateId: consts.ORDER_STATE_WAIT_PAY}, &do.OrderInfo{OrderIsPaid: consts.ORDER_PAID_STATE_YES, OrderStateId: consts.ORDER_STATE_PICKING})
	}
}
