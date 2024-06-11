function UserButton({isUserLogged}){
        if(isUserLogged=="true"){
            return(
                <>
                    <input type="button" value="Signout" />
                </>
            )
        }else{
            return (
                <input type="button" value="Signin" />
            )
        } 
}
function App(){
    return (
        <>
            <UserButton isUserLogged="false"/>
        </>
    )
}

export default App