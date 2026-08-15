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
          <div className="mx-auto w-full max-w-7xl px-6">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
