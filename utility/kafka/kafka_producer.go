package kafkautil

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/util/gconv"
	"github.com/segmentio/kafka-go"
)

var Producer *kafka.Writer
var Writer *kafka.Writer

func InitKafka(ctx context.Context) {
	broker, _ := g.Cfg().Get(ctx, "kafka.brokers")
	brokers := gconv.Strings(broker)
	Producer = &kafka.Writer{
		Addr:     kafka.TCP(brokers...),
		Balancer: &kafka.Hash{},
	}
	topic, _ := g.Cfg().Get(ctx, "kafka.topic")
	Writer = &kafka.Writer{
		Addr:     kafka.TCP(brokers...),
		Topic:    gconv.String(topic),
		Balancer: &kafka.Hash{},
	}
}
