import { useEffect, useState } from "react"

const Todo = ({id}) => {
    const [data, setData] = useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/'+id)
        .then(response => response.json())
        .then((json)=>{
            setData(json)
            console.log(json)
        })
    }, [id])
    return (
        <>
            {
                data &&
                <div>
                    User ID : {data.userId} <br></br>
                    Title   : {data.title} <br></br>
                    Status  : {
                        data.completed
                        ?<p>Completed</p>
                        :<p>Not Completed</p>
                    } <br></br>
                </div>
            }
        </>
    )
}

export default Todo