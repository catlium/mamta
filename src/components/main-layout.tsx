import { Outlet } from "react-router"
import Navbar from "./navbar"
import Footer from "./footer"

const  MainLayout = ()=>{
    return(
        <>
        <Navbar/>
        <main className="container overflow-hidden mx-auto">
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}

export default MainLayout