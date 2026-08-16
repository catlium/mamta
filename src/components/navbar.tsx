import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div>
            <h1 className="text-2xl font-bold text-primary">MAMTA</h1>

            <p className="text-xs text-secondary">Samajik Sanstha</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 font-medium md:flex">
          <li>
            <Link
              to="/"
              className="text-foreground transition hover:text-secondary"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-foreground transition hover:text-secondary"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/programs"
              className="text-foreground transition hover:text-secondary"
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-foreground transition hover:text-secondary"
            >
              Contact
            </Link>
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
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-foreground transition hover:text-secondary"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block text-foreground transition hover:text-secondary"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/programs"
                onClick={() => setIsOpen(false)}
                className="block text-foreground transition hover:text-secondary"
              >
                Programs
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-foreground transition hover:text-secondary"
              >
                Contact
              </Link>
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
