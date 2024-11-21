import { useEffect, useState } from "react"
import ProjectInfo from "../components/project-info.component"
import { GetApi } from "../../api/api"
import type { Project } from "../../api/types"
export default function ProjectsPage() {

  const [projects, setProjects] = useState<Project[]>()
  const [loading, setLoading] = useState(false)

  function getProjects() {
    setLoading(true)
    GetApi().GET("/projects").then(({ data }) => setProjects(data as Project[])).finally(() => setLoading(false))
  }

  useEffect(() => {
    getProjects()
  }, [])
  return <div className="flex flex-col gap-3">
    {
      projects?.map(item => <ProjectInfo project={item} />)
    }
  </div>
}

