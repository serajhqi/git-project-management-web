import { Button, Panel, Progress } from "rsuite";
import Task from "./task.component";
import StateItem from "./stat-item.component";

export default function Project({ id }: { id: number }) {


  const stat = {
    doneTasks: 233,
    allTasks: 534
  }
  return (
    <>
      <Panel bodyFill >

        <Panel header="Project">
          Project stats of {id}
          <div>start: 2024-09-01</div>
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
          new Array(10).fill(0).map((_, idx) => <Task key={idx} id={idx}></Task>)
        }
      </div>
      <Button className="w-full">More...</Button>
    </>
  )
}