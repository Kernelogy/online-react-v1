import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import NotFound from "./pages/NotFound"

import HomeLayout from "./layouts/HomeLayout"

const App = () => {
    return (
        <>
            {/* <HomeLayout /> */}
            <BrowserRouter>
                <Routes>
                    <Route element={ <HomeLayout />}>
                        <Route index element={ <Home />}></Route>
                        <Route path="/home" element={ <Home />}></Route>
                        <Route path="/contact" element={ <Contact />}></Route>
                        <Route path="/blog" element={ <Blog/> }></Route>
                    </Route>
                    <Route path="/about" element={ <About /> }></Route>   
                    <Route path="*" element={ <NotFound/> }></Route>               
                </Routes>            
            </BrowserRouter>            
        </>
    )
}

export default App