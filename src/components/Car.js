const Car = () => {
    const cars = ["Innova", "Toyota", "Maruthi"]
    return (
        <>    
                <ul>
                    {  
                        cars.map((e)=>{
                            return <li key={e}>{e}</li>
                        })
                    }
                </ul>        
        </>
    )
}

export default Car