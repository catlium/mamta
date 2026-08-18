import { Outlet } from "react-router"
import Navbar from "./navbar"
import Footer from "./footer"

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="w-full">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
