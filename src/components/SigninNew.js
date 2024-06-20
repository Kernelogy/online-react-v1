import { useState } from "react"

const SigninNew = () => {
    const signinUser = (e) => {
        e.preventDefault()
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        //rest api service
        fetch("http://localhost:4040/user/login", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        } )
        .then( res => res.json())
        .then((data)=>{
            if(data.userFound){
                alert("Login Success")
            }else{
                alert("Login Failed")
            }
        })
    }
    return (
        <>
            <form onSubmit={(e)=>{signinUser(e)}}>
                <input name="username" type="text" placeholder="Username" />
                <input name="password" type="password" placeholder="Password" />
                <input type="submit" value="Signin" />
            </form>
        </>
    )
}

export default SigninNew