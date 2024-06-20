import { useRef, useEffect, useState } from "react"

const App = () => {
    const [input, setInput] = useState(null)
    const counter = useRef(0)
    const myTxt = useRef(null)
    useEffect(()=>{
        counter.current = counter.current + 1 
        console.log(counter.current)
    })
    const focusText = () => {
        // console.log("Calling")
        // document.getElementById("my-txt").focus()
        myTxt.current.focus()
    }

    return (
        <>
            <input ref={myTxt} id="my-txt" type="text" placeholder="Type Something..."
            onInput={(e)=>{setInput(e.target.value)}} />

            <input type="button" value="Focus Text" 
            onClick={()=>{focusText()}}/>
            {
                input && counter.current &&
                <>                
                <h1>{input}</h1>
                <h1>The page is rendered {counter.current} times</h1>
                </>
            }
        </>
    )
}

export default App
/*
    useRef => Reference

*/