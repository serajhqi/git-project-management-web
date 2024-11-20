import Task from "../components/task.component";

export default function ProjectPage() {
  return <div>
    {
      new Array(10).fill(0).map((item, idx) => <Task key={idx} id={idx}></Task>)
    }
  </div>
}