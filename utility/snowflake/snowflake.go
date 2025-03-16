package snowflake

import (
	"errors"
	"sync"
	"sync/atomic"
	"time"
)

const (
	epoch        = 1577836800000 // 2020-01-01 00:00:00 UTC
	machineBits  = 10            // 机器ID位数
	sequenceBits = 12            // 序列号位数
	maxMachineID = -1 ^ (-1 << machineBits)
	maxSequence  = -1 ^ (-1 << sequenceBits)
	timeShift    = machineBits + sequenceBits
	machineShift = sequenceBits
)

type Generator struct {
	mu        sync.Mutex
	machineID int64
	lastTime  int64
	sequence  int64
}

func New(mid int64) (*Generator, error) {
	if mid < 0 || mid > maxMachineID {
		return nil, ErrInvalidMachineID
	}
	return &Generator{machineID: mid}, nil
}

func (g *Generator) GenID() (int64, error) {
	now := time.Now().UnixNano()/1e6 - epoch

	for {
		oldLast := atomic.LoadInt64(&g.lastTime)
		seq := atomic.LoadInt64(&g.sequence)

		if now < oldLast {
			return 0, ErrClockBackward
		}

		if now == oldLast {
			newSeq := (seq + 1) & maxSequence
			if newSeq == 0 {
				now = g.waitNextMs()
				continue
			}
			if atomic.CompareAndSwapInt64(&g.sequence, seq, newSeq) {
				break
			}
		} else {
			if atomic.CompareAndSwapInt64(&g.lastTime, oldLast, now) {
				atomic.StoreInt64(&g.sequence, 0)
			}
		}
	}

	return (now << timeShift) | (g.machineID << machineShift) | atomic.LoadInt64(&g.sequence), nil
}

func (g *Generator) waitNextMs() int64 {
	now := time.Now().UnixNano()/1e6 - epoch
	for now <= g.lastTime {
		time.Sleep(100 * time.Microsecond)
		now = time.Now().UnixNano()/1e6 - epoch
	}
	return now
}

var (
	ErrClockBackward    = errors.New("时钟回拨异常")
	ErrInvalidMachineID = errors.New("机器ID配置错误")
)
