import { Panel } from "rsuite"
import StateItem from "../components/stat-item.component"

export default function DashboardPage() {
  return (
    <div className="flex justify-center items-start">
      <Panel bordered className="w-[250px] flex flex-col gap-10">
        <StateItem title="projects" stats={10} link="/projects" />
        <StateItem title="tasks" stats={10} />
        <StateItem title="done tasks" stats={349} />
        <StateItem title="activities" stats={938} />
      </Panel>
    </div>
  )
}

