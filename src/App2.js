function App(){
    // const butClick = () => {
    //     alert("Button Clicked")
    // }
    // const butClick = (val) => {
    //     alert("Button Clicked " + val)
    // }
    const butClick = (val, e) => {
        // alert("Button Clicked " + val + " " + e.target.value)
        e.target.value = "Clicked"
        e.target.style = "color:red"
    }
    return (
        <>
            {/* <input type="button" value="click" onClick={()=>{alert("Button Clicked!")}} /> */}
            {/* <input type="button" value="click" onClick={butClick} /> */}
            <input 
                type="button" 
                value="click" 
                onClick={(e)=>{
                    butClick("Some Data", e)
                }}
                onMouseOver={(e)=>{
                    e.target.style = "border-radius: 25px; background: #73AD21;padding: 20p; width: 200px;height: 150px;"
                }} 
                onMouseOut={(e)=>{
                    e.target.style = "border-radius: 25px;border: 2px solid #73AD21;padding: 20px;width: 200px;height: 150px;"
                }}
            />
        </>
    )
}

export default App

/*
Parameter
Argument

All the inline js executes on page load
They must nested inside an arrow function
    <script>
        function fun(){
            alert("Hello World")
        }
        ()=>{

        }
        
    </script>

    button
        click
        mouseover
        mouseout
    text
        change
        input
*/