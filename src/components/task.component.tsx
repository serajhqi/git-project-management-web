import { Button, Input, Panel, Timeline } from "rsuite";
import { ActivityDTO, TaskDTO } from "../../api/types";
import { useEffect, useState } from "react";
import { GetApi } from "../../api/api";

export default function Task({ task }: { task?: TaskDTO }) {
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState<ActivityDTO[]>()

  function getActivities() {
    if (!task?.id) return
    setLoading(true)
    GetApi().GET("/tasks/{id}/activities", {
      params: {
        path: {
          id: task.id
        }
      }
    }).then(({ data }) => setActivities(data as ActivityDTO[])).finally(() => setLoading(false))
  }

  useEffect(() => getActivities(), [])
  return (
    loading ? "Loading..." : <div className="w-[700px]">
      <Panel bodyFill>
        <div className="flex justify-end">
          <div className={`text-center text-xs px-2 w-17 flex py-[2px] bg-gray-200`}>{task?.created_at}</div>
        </div>
        <Panel header={task?.title}>
          <div>
            <div className="flex">
              <div>
              </div>
              <div>
                {task?.description}
              </div>
            </div>
          </div>
        </Panel>

      </Panel>

      <div className="grid grid-cols-1 gap-4 p-2">
        {
          loading ? "Loading..." : <AlignTimeline activities={activities} />
        }
      </div>
    </div>
  )
}

function AlignTimeline({ activities }: { activities?: ActivityDTO[] }) {
  return (
    <Timeline align="alternate" isItemActive={Timeline.ACTIVE_FIRST}>
      <Timeline.Item>
        <div className="flex flex-col gap-2">
          <Input placeholder="Activity" />
        </div>
      </Timeline.Item>
      {
        activities?.map((activity) => <Timeline.Item key={activity.id}>
          <p className="font-bold">{activity.title}</p>
          <p>{activity.description}</p>
          <p className="text-sm text-gray-400">{activity.created_at}</p>
        </Timeline.Item>)
      }
    </Timeline>
  )
}