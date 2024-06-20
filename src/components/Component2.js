import Component3 from "./Component3"

import { useContext } from "react"
import {DataContext } from "../App"

const Component2 = () => {
    const {dataOne, dataTwo} = useContext(DataContext)
    return (
        <>
            <h1>Component Two</h1>
            <p>{dataOne}</p>
            <p>{dataTwo}</p>
            <Component3/>
        </>
    )
}

export default Component2