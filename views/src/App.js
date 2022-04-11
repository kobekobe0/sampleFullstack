import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Task from './Task'

function App() {
    const [tasks, setTasks] = useState([])
    const [test, setText] = useState('')
    const [trigger, setTrigger] = useState(false)

    const handleAdd = () => {
        axios.post('http://localhost:3000/api/', {
            description: test,
        })
        setTrigger(!trigger)
    }

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/')
            .then((res) => setTasks(res.data))
    }, [trigger, tasks])

    return (
        <div className="App">
            <div className="header">
                <h1>KEEPTRACK</h1>
            </div>
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {tasks.map((task) => (
                    <Task id={task._id} description={task.description} />
                ))}
            </div>
        </div>
    )
}

export default App
