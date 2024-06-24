import { useEffect, useReducer } from "react"
import AddTask from "./AddTask"
import TaskList from "./TaskList"
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


    const taskReducer = (tasks, state) => {
        switch(state.type){
            case "ADD":
                console.log(state)
                const id = tasks.length + 1
                return (
                    [...tasks, {
                        id: id,
                        text: state.task,
                        done: false
                    }]
                )
            case "CHANGE":
                console.log(state)
                return (
                    tasks.map((t) => {
                      if (t.id === state.task.id) {
                        return state.task;
                      } else {
                        return t;
                      }
                    })
                  )                
            case "DELETE":
                console.log(state)
                return (
                    tasks.filter((t) => {
                        if (t.id !== state.task.id) {
                          return t;
                        } 
                    })
                )                
            case "DONE":
                console.log(state)
                return (
                    tasks.map((t) => {
                      if (t.id === state.task.id) {
                        return {
                            id: state.task.id,
                            text: state.task.text,
                            done: !t.done
                        }
                      } else {
                        return t;
                      }
                    })
                  )            
            default: 
                console.log(tasks)
                return

        }
    }
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

    const handleAddTask = (task) => {
        dispatch({
            type: "ADD",
            task: task
        })
    }
    const handleDeleteTask = (task) => {
        dispatch({
            type: "DELETE",
            task: task
        })
    }
    const handleChangeTask = (task) => {
        dispatch({
            type: "CHANGE",
            task: task
        })
    }
    const handleDoneTask = (task) => {
        dispatch({
            type: "DONE",
            task: task
        })
    }
    useEffect(()=>{
        console.log(tasks)
    },)

    return (
        <>
        {
            tasks && <>
            <AddTask addTask={handleAddTask} />
            <TaskList tasks={tasks} 
            changeTask={handleChangeTask} 
            deleteTask={handleDeleteTask} 
            doneTask = {handleDoneTask}/>
            </>
        }

        </>
    )
}

export default App