import { useEffect, useState } from "react";
import { GetApi } from "../../api/api";
import Project from "../components/project.component";
import { useParams } from "react-router-dom";
import { ProjectDTO } from "../../api/types";

export default function ProjectPage() {

  const [loading, setLoading] = useState(false)
  const [project, setProject] = useState<ProjectDTO>()

  const params = useParams()

  function getProject() {
    if (!params.projectId) return
    setLoading(true)
    GetApi().GET("/projects/{id}", {
      params: {
        path: {
          id: Number.parseInt(params.projectId)
        }
      }
    }).then(({ data }) => setProject(data)).finally(() => setLoading(false))
  }

  useEffect(() => getProject(), [])

  return (
    <div className="flex flex-col gap-3">
      {
        loading ? "Loading..." : <Project project={project} />
      }
    </div>

  )
}