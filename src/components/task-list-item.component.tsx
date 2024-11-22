import { Panel } from "rsuite"
import { TaskDTO } from "../../api/types"

export default function TaskListItem({ task }: { task?: TaskDTO }) {

  return (

    <Panel bordered bodyFill >

      <div className="flex justify-between">
        <div className={`text-center text-xs px-2 w-17 flex py-[2px] ${task?.status == "OPEN" ? "text-white bg-blue-400" : "bg-gray-200"}`}>{task?.status}</div>
      </div>
      <Panel header={task?.title}>
        <div className="flex justify-between mb-2">
          <div>task-id: #{task?.id}</div>
          <div className="flex gap-2 items-center">
            <div className="text-xs">Priority:</div>
            <div className={`w-3 h-3 rounded-lg ${task?.priority == "high" ? "bg-red-400" : task?.priority == "medium" ? "bg-amber-400" : "bg-green-400"}`}></div>
          </div>
        </div>
        <div>{task?.description}</div>

      </Panel>
      <div className="flex justify-end px-2">
        <a className="flex justify-end px-2" href={`/projects/${task?.project_id}/tasks/${task?.id}`}>{Math.floor(Math.random() * 10)} Activities</a>
      </div>

      <div className="flex justify-between">
        <div className="text-xs text-gray-400 rounded-lg p-1">{task?.created_at}</div>
      </div>
    </Panel>
  )

}
