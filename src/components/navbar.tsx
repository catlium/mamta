import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Logo */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Mamta Logo"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-600">MAMTA</h1>

            <p className="text-xs text-orange-500">Samajik Sanstha</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 font-medium md:flex">
          <li>
            <Link
              to="/"
              className="text-gray-700 transition duration-300 hover:text-orange-500"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-gray-700 transition duration-300 hover:text-orange-500"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/programs"
              className="text-gray-700 transition duration-300 hover:text-orange-500"
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-700 transition duration-300 hover:text-orange-500"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Donate Button */}
        <Link
          to="/donate"
          className="hidden rounded-full bg-orange-500 px-6 py-3 text-white transition duration-300 hover:bg-orange-600 md:block"
        >
          Donate Us
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white px-6 py-5 shadow-lg md:hidden">
          <ul className="flex flex-col gap-5 font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 transition hover:text-orange-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 transition hover:text-orange-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/programs"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 transition hover:text-orange-500"
              >
                Programs
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 transition hover:text-orange-500"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-full bg-orange-500 py-3 text-center text-white transition hover:bg-orange-600"
              >
                Donate Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
