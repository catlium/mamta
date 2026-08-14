import { Outlet } from "react-router"
import Navbar from "./navbar"
import Footer from "./footer"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
