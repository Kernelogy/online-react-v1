const App = () => {
    const fruits = ["Apple", "Orange", "Mango"]
    const filteredFruits = fruits.filter((e)=>{
        return e!=="Orange"
    })

    return (
        <>
            <ul>
                {
                    fruits.map((e)=>{
                        return <li>{e}</li>
                    })
                }
            </ul>
            <ul>
                {
                    filteredFruits.map((e)=>{
                        return <li>{e}</li>
                    })
                }
            </ul>

        </>
    )
}

export default App