import { useRef, useState, useCallback } from "react"
import Todos from "./components/Todos"

const App = () => {
    const [text, setText] = useState(null)
    const [todos, setTodos] = useState([])
    const addTodos = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos])
    return (
        <>
            <input type="text" placeholder="Type Some Text" 
            onInput={(e)=>{setText(e.target.value)}}/>
            {
                text &&
                <h1>{text}</h1>
            }
            <Todos todos={todos} addTodos={addTodos} />        
        </>
    )
}

export default App