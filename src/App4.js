function App(){
    const username = "MUkilan"
    const id = 123
    return (
        <>
            {
                username && id &&
                <p>The username is empty</p>
            }        
        </>
    )
}

// function App(){
//     const isUserLogged = false
//     return (
//         <>
//             {
//               isUserLogged
//               ?  
//                 <input type="button" value="Signout" />
//               :
//                 <input type="button" value="Signin" />
//             }        
//         </>
//     )
// }

export default App