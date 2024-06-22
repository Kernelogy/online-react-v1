import { useState } from "react";
import TaskList from "./TaskList"
import AddTask from "./AddTask";
const App = () => {
    const initialTasks = [
        {
            id: 1,
            text: "Task One",
            done: false
        },
        {
            id: 2,
            text: "Task Two",
            done: true
        },
        {
            id: 3,
            text: "Task Three",
            done: false
        }
    ]
    let next = 4
    const [tasks, setTasks] = useState(initialTasks);
    const handleChangeTask = (task) => {
        setTasks(
          tasks.map((t) => {
            if (t.id === task.id) {
              return task;
            } else {
              return t;
            }
          })
        );
      }
      const handleDeleteTask = (task) =>{
        setTasks(
            tasks.filter((t) => {
                if (t.id !== task.id) {
                  return t;
                } 
            })
        )
      }
      const handleAddTask = (text) => {
        console.log(text)
        const id = tasks.length + 1
        setTasks(
            [...tasks, {
                id: id,
                text: text,
                done: false
            }]
        )
        next++
      }

    return (
        <>
            <AddTask addTask={handleAddTask} />
            <TaskList tasks={tasks} 
            changeTask={handleChangeTask} 
            deleteTask={handleDeleteTask}/>
        </>
    )
}

export default App