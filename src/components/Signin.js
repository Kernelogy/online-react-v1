import { useState } from "react"

const Signin = () => {
    const [username, setUsername] = useState(null)
    const [passcode, setPasscode] = useState(null)
    const setData = (e) => {
        // let username = document.getElementById("username").value
        // let passcode = document.getElementById("passcode").value
        // document.getElementById("demo").innerHTML = "Hi Welcome " + username + "The given password is " + passcode

        setUsername(document.getElementById("username").value)
        setPasscode(document.getElementById("passcode").value)
        e.preventDefault()
    }


    return (
        <>
            <form method="GET">
                <input id="username" type="text" placeholder="Username" name="user"
                onInput={(e)=>{
                    setUsername(e.target.value)
                }} /> <br></br>
                <input id="passcode" type="password" placeholder="password" name="pass"
                onInput={(e)=>{
                    setPasscode(e.target.value)
                }} /> <br></br>
                <input type="submit" value="Submit" onClick={(e)=>{setData(e)}} />                
            </form>   
            <div id="demo">
                {
                    username && passcode &&
                    <p>Hi Welcome {username} The given passcode is {passcode}</p>
                }
            </div>

        </>
    )
}

export default Signin