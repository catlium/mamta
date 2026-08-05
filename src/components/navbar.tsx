import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Mamta Logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-600">
              MAMTA
            </h1>

            <p className="text-xs text-orange-500">
              Samajik Sanstha
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/programs"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Donate Button */}
        <button className="hidden md:block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
          Donate Us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-5">

          <ul className="flex flex-col gap-5 font-medium">

            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/programs"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition"
              >
                Programs
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition"
              >
                Contact
              </Link>
            </li>

            <li>
              <button className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition">
                Donate Us
              </button>
            </li>

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;