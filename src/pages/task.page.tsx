import { Button, Input, Timeline } from "rsuite";

export default function TaskPage() {
  return (
    <div className="flex flex-col gap-5 p-4 items-center justify-center">
      <AlignTimeline />
    </div>
  )
}

const AlignTimeline = () => (
  <Timeline align="alternate" isItemActive={Timeline.ACTIVE_FIRST}>
    <Timeline.Item>
      <div className="flex flex-col gap-2">
        <Input placeholder="Activity" />
      </div>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-01</p>
      <p>Your order starts processingYour order starts processingYour order starts processingYour order starts processing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-02</p>
      <p>Your order starts processingYour order starts processingYour order starts processingYour order starts processing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-10</p>
      <p>Arrival</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-12</p>
      <p>Your order starts processingYour order starts processingYour order starts processingYour order starts processing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-15</p>
      <p>Your order starts processingYour order starts processingYour order starts processingYour order starts processing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-01</p>
      <p>Your order starts processingYour order starts processingYour order starts processingYour order starts processing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-02</p>
      <p>Order out of stock</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-10</p>
      <p>Your order starts processingYour order starts processingYour order starts processingYour order starts processing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-12</p>
      <p>Order out of the library</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-15</p>
      <p>Sending you a piece</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-01</p>
      <p>Your order starts processing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-02</p>
      <p>Order out of stock</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-10</p>
      <p>Arrival</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-12</p>
      <p>Order out of the library</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>2018-03-15</p>
      <p>Sending you a piece</p>
    </Timeline.Item>
  </Timeline>
);