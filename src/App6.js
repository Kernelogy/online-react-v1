import { useState } from "react"
const App = () => {
    const [inputs, setInputs] = useState(null)
    // const user = {
    //     first: "Mukilan",
    //     last: "Subbiah",
    //     age: 34
    // }
    // user = {...user, first: "Karumukilan", last: "Subbu"}

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        console.log(inputs)
    }
    return (
        <>
            <form>
                <input type="text" name="firstName" placeholder="First Name" 
                onChange={(e)=>{handleChange(e)}}/>
                <input type="text" name="lastName" placeholder="Last Name" 
                onInput={handleChange}/>
                <input type="number" name="age" placeholder="Age" 
                onInput={handleChange}/> <br></br>
                Qualification
                <select onChange={(e)=>{handleChange(e)}} name="qualification">
                    <option value="sslc">SSLC</option>
                    <option value="hsc">HSC</option>
                    <option value="degree">Degree</option>
                </select>
                <input type="submit" value="Submit" />
            </form>      
        </>
    )
}

export default App