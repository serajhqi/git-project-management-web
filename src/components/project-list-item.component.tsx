import { Panel, Progress } from "rsuite";
import { ProjectDTO } from "../../api/types";

export default function ProjectListItem({ project }: { project: ProjectDTO }) {

  return (
    <div className="flex min-w-[500px]">
      <Panel bordered bodyFill className="w-full">

        <Panel header={project.name}>
          proj-id: # {project.id}
          <p>
            <small>
              {project.description}
            </small>
          </p>

        </Panel>
        <div className="flex w-full bg-slate-50">
          <Progress.Line percent={Math.floor(Math.random() * 100)} strokeColor="blue" />
        </div>
        <div className="flex justify-end mb-2 mr-2">
          <a href={`/projects/${project.id}`}>Go</a>
        </div>
      </Panel>
    </div>
  )
}