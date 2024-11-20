import { Button, Panel } from "rsuite";
import Task from "./task.component";

export default function Project({ id }: { id: number }) {
  return (
    <Panel bordered bodyFill >

      <Panel header="Project">
        Project stats of {id}

      </Panel>

      <Button className="w-full">Add</Button>
      <div className="grid grid-cols-1 gap-4 p-2">
        {
          new Array(10).fill(0).map((_, idx) => <Task key={idx} id={idx}></Task>)
        }
      </div>
      <Button className="w-full">More...</Button>
    </Panel>
  )
}