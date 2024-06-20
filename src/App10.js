import { useState } from "react"
import Greet from "./components/Greet"
import Todo from "./components/Todo"

const App = () => {
    const [name, setName] = useState(null)
    const [id, setId] = useState(1)
    return (
        <>
            <input type="text" 
            placeholder="Enter Name" 
            onInput={(e)=>{
                setName(e.target.value)
            }}/> <br></br>
            
            Todo Id : 
            <input type="text" 
            placeholder="ID" 
            onInput={(e)=>{
                setId(e.target.value)
            }}/>
            
            {
                name &&
                <Greet name={name} />
            }
            <Todo id={id} />
        </>
    )

}

export default App