import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskDTO } from "../../api/types";
import { GetApi } from "../../api/api";
import Task from "../components/task.component";

export default function TaskPage() {

  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState<TaskDTO>()
  const { taskId } = useParams()

  function getTask() {
    if (!taskId || !taskId) return
    setLoading(true)
    GetApi().GET("/tasks/{id}", {
      params: {
        path: {
          id: Number.parseInt(taskId)
        }
      }
    }).then(({ data }) => setTask(data as TaskDTO)).finally(() => setLoading(false))

  }

  useEffect(() => getTask(), [])

  return (
    <div className="flex flex-col gap-5 p-4 ">
      {
        loading ? "Loading..." : <Task task={task} />
      }
    </div>
  )
}