import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { Outlet } from "react-router"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
