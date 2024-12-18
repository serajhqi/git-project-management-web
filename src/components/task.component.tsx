import { useNavigate } from "react-router-dom"
import { Button, Panel } from "rsuite"

export default function Task({ id }: { id: number }) {
  const navigate = useNavigate()

  return (

    <Panel bordered bodyFill >

      <Panel header="Task">
        <p>
          <small>
            A suite of React components, sensible UI design, and a friendly development experience. {id}
          </small>
        </p>

      </Panel>
      <div className="flex justify-end">

        <Button appearance="link" onClick={() => navigate("task/12")}>{Math.floor(Math.random() * 10)} Activities</Button>
      </div>
    </Panel>
  )

}
