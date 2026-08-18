import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, NavLink } from "react-router"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div>
            <h1 className="text-2xl font-bold text-primary">MAMTA</h1>

            <p className="text-xs text-secondary">Samajeek Sansta</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 font-medium md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition hover:text-secondary ${isActive ? "text-secondary" : "text-foreground"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition hover:text-secondary ${isActive ? "text-secondary" : "text-foreground"}`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/programs"
              className={({ isActive }) =>
                `transition hover:text-secondary ${isActive ? "text-secondary" : "text-foreground"}`
              }
            >
              Programs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition hover:text-secondary ${isActive ? "text-secondary" : "text-foreground"}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Donate Button */}
        <Link
          to="/donate"
          className="hidden rounded-full bg-secondary px-6 py-3 font-medium text-secondary-foreground transition hover:opacity-90 md:block"
        >
          Donate Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-background px-6 py-5 shadow-md md:hidden">
          <ul className="flex flex-col gap-5 font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block transition hover:text-secondary ${isActive ? "text-secondary" : "text-foreground"}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block transition hover:text-secondary ${isActive ? "text-secondary" : "text-foreground"}`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/programs"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block transition hover:text-secondary ${isActive ? "text-secondary" : "text-foreground"}`
                }
              >
                Programs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block transition hover:text-secondary ${isActive ? "text-secondary" : "text-foreground"}`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-full bg-secondary py-3 text-center font-medium text-secondary-foreground transition hover:opacity-90"
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
