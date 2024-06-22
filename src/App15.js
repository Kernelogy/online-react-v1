const App = () => {
    const todos = [
        {
            id: 1,
            title: "Meeting One",
            completed: false
        },
        {
            id: 2,
            title: "Meeting Two",
            completed: true
        },
        {
            id: 3,
            title: "Meeting Three",
            completed: false
        },
    ]
    return (
        <>
            {
                todos &&
                    <label>
                        {
                            todos.map((e)=>{
                                return <>
                                    {e.title} <input type="checkbox" checked={e.checked} />
                                </>
                            })
                        }                        
                    </label>
            }
        </>
    )
}

export default App

