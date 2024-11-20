import Activity from "../components/activity.component";

export default function TaskPage() {
  return <div>
    {
      new Array(10).fill(1).map((item, idx) => <Activity key={idx} id={idx}></Activity>)
    }
  </div>
}