import { useNavigate } from "react-router-dom";
import { Button, Panel } from "rsuite";

export default function ProjectInfo({ id }: { id: number }) {

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
      <div className="flex justify-end mb-2 mr-2">

        <Button appearance="link" onClick={() => navigate("/projects/12")}>Go</Button>
      </div>
    </Panel>
  )
}