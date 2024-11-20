import './App.css'
import Task from './components/task.component'

function App() {

  return (
    <>
      Projects:
      <div className="flex gap-3">
        <button>Admin Service</button>
        <button>Price Service</button>
      </div>

      {
        new Array(10).fill(0).map((item) => <Task key={item} />)
      }
    </>
  )
}

export default App
