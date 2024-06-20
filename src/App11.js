import Component1 from "./components/Component1"
import { createContext } from "react"

export const DataContext = createContext()

const App = () => {
    const data = {
        dataOne: "Hello World",
        dataTwo: "Mother Earth",
        dataThree: "Hola World"
    }
    return (
        <>
            <DataContext.Provider value={data}>
                <Component1/>
            </DataContext.Provider>
        </>
    )
}

export default App

// Props Drilling
// useContext => hook