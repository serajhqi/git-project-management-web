import ProjectInfo from "../components/project-info.component"

export default function ProjectsPage() {

  const projects = [
    {
      id: 1,
      title: "admin service"
    }, {
      id: 2,
      title: "price service"
    }
  ]
  return <div className="flex flex-col gap-3">
    {
      projects.map(item => <ProjectInfo id={item.id} />)
    }
  </div>
}

