import { useState } from "react"

const TaskList = ({tasks, changeTask, deleteTask}) => {
    return (
        <>
            <h1>My Tasks</h1>
           {
            tasks.map((e)=>{
                return <>
                    <Task task={e} key={e.id} changeTask={changeTask} />
                    <input type="button" value="Delete" 
                    onClick={(ev)=>{
                        deleteTask(e)
                    }}/> <br />
                </>
            })
           }
        </>
    )
}

const Task = ({task, changeTask}) => {
    const [isEdit, setIsEdit] = useState(false)
    let taskContent
    
    if(!isEdit){
        taskContent = (
            <>
                <label>
                    <input type="checkbox" checked={task.done}
                    />
                    {task.text}
                    <input type="button" value="Edit" 
                    onClick={(e)=>{setIsEdit(true)}}/>                    
                </label>
            </>
        )
    }else{
        taskContent = (
            <>
                <input type="text" value={task.text} 
                onChange={(e) => {
                    changeTask({
                      ...task,
                      text: e.target.value,
                    });
                  }}/>
                <input type="button" value="Save" 
                onClick={(e)=>{setIsEdit(false)}}/>
            </>
        )
    }
    return (
        <>
        {
            taskContent &&
                taskContent
        }
        </>

    )
}

export default TaskList