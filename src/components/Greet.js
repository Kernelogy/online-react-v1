import { useEffect } from "react"

const Greet = ({name}) => {
    useEffect(()=>{
        console.log("Effect Calling...")
        return(
            ()=>{
                console.log("Unloading...")
            }
        )
    },[])
    return (
        <>
            <h1>Welcome {name}!</h1>
        </>
    )
}

export default Greet