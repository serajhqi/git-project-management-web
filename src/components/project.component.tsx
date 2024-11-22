import { Button, Panel, Progress } from "rsuite";
import StateItem from "./stat-item.component";
import { useEffect, useState } from "react";
import { ProjectDTO, TaskDTO } from "../../api/types";
import { GetApi } from "../../api/api";
import TaskListItem from "./task-list-item.component";

export default function Project({ project }: { project?: ProjectDTO }) {

  const [loading, setLoading] = useState(false)
  const [tasks, setTasks] = useState<TaskDTO[]>()

  function getTasks() {
    if (!project?.id) return
    setLoading(true)
    GetApi().GET("/projects/{project_id}/tasks", {
      params: {
        path: {
          project_id: project?.id
        }
      }
    }).then(({ data }) => setTasks(data as TaskDTO[])).finally(() => setLoading(false))
  }

  useEffect(() => {
    getTasks()
  }, [])

  const stat = {
    doneTasks: 233,
    allTasks: 534
  }
  return (
    loading ? "Loading..." : <div className="min-w-[700px]">
      <Panel bodyFill >
        <div className="flex justify-end">
          <div className={`text-center text-xs px-2 w-17 flex py-[2px] bg-gray-200`}>{project?.created_at}</div>
        </div>
        <Panel header={project?.name}>
          <div>
            <div className="flex">
              <div>
              </div>
              <div>
                {project?.description}
              </div>
            </div>
          </div>
        </Panel>
        <div className="flex justify-center items-start gap-5">
          <StateItem title="tasks" stats={10} />
          <StateItem title="done tasks" stats={stat.doneTasks} />
          <StateItem title="activities" stats={stat.allTasks} />
        </div>
        <Progress.Line percent={Math.ceil(stat.doneTasks * 100 / stat.allTasks)} strokeColor="blue" />

      </Panel>

      <Button className="w-full">Add</Button>
      <div className="grid grid-cols-1 gap-4 p-2">
        {
          loading ? "Loading..." : tasks?.map((task, idx) => <TaskListItem key={idx} task={task}></TaskListItem>)
        }
      </div>
      <Button className="w-full">More...</Button>
    </div>
  )
}