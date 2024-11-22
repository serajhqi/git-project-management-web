import { useEffect, useState } from "react"
import ProjectInfo from "../components/project-info.component"
import { GetApi } from "../../api/api"
import type { ProjectDTO } from "../../api/types"
export default function ProjectsPage() {

  const [projects, setProjects] = useState<ProjectDTO[]>()
  const [loading, setLoading] = useState(false)

  function getProjects() {
    setLoading(true)
    GetApi().GET("/projects").then(({ data }) => setProjects(data as ProjectDTO[])).finally(() => setLoading(false))
  }

  useEffect(() => {
    getProjects()
  }, [])
  return <div className="flex flex-col gap-3">
    {
      loading ? "Loading..." : projects?.map(item => <ProjectInfo project={item} />)
    }
  </div>
}

