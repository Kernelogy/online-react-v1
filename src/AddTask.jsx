import { useRef, useState } from "react"

const AddTask = ({addTask}) => {
    const [text, setText] = useState("")
    return (
        <>
            <input type="text" placeholder="Enter your Task"
            onInput={(e)=>{setText(e.target.value)}}/>
            <input type="button" value="Add" 
            onClick={(e)=>{
                addTask(text)
            }}/>
        </>
    )
}

export default AddTask