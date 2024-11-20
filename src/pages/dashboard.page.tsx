import { Panel } from "rsuite"

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

const StateItem = ({ title, stats, link }: { title: string, stats: string | number, link?: string }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="text-3xl font-bold text-blue-500">{stats}</div>
      {
        link ? <a className="text-lg" href={link}>{title}</a> : <div>{title}</div>
      }
    </div>
  )
}