import { memo } from "react"
const Todos = ({todos, addTodos}) => {
  console.log("Child Rerendering")
  return (
    <>
      <h1>My Todos</h1>
      {
        todos &&
        todos.map((e)=>{
          return <p>{e}</p>
        })
        
      }
      <input type="button" value="Add Todo" onClick={addTodos} />
    </>
  )
}

export default memo(Todos)