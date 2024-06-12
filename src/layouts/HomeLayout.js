import { Outlet, Link } from "react-router-dom"
const HomeLayout = () => {
    return (
        <>
            <nav>
                <ul>
                    {/* 
                    <li><a href="/home">Home</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li> 
                    */}
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>                
            </nav>    
            <Outlet />    
        </>
    )
}

export default HomeLayout
