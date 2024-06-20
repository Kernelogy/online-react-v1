import { useContext } from "react"
import { DataContext } from "../App"

const Component3 = () => {
    const {dataThree} = useContext(DataContext)
    return (
        <>
            <h1>Component Three</h1>
            <p>{dataThree}</p>
        </>
    )
}

export default Component3