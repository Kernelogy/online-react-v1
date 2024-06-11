import { useState } from "react"

const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = ()=>{
        let todo = document.getElementById("todo").value
        setTodos((values)=>([...values, todo]))
    }
    const removeTodo = (val)=>{
        console.log(val)
        let t = todos.filter((e)=>{
            return e!=val
        })
        setTodos(t)

        console.log(t)
        // alert("Removing Todo")

    }

    return (
        <>
            <input id="todo" type="text" placeholder="Todos"/><br></br>
            <input type="button" value="Add Todo" onClick={addTodo} /> 
            <>
                {
                    todos.map((val)=>{
                        return (
                            <p>{val}<button onClick={(e)=>{removeTodo(val)}}>X</button></p>
                        )
                    })
                }
            </>       
        </>
    )
}

export default App