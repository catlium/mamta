import { Mail } from "lucide-react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6"
import { Link } from "react-router"

function Footer() {
  return (
    <footer className="bg-white px-6 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-blue-600">MAMTA</h1>
            <p className="text-xs text-orange-500">Samajik Sanstha</p>
          </div>

          {/* Navigation */}
          <ul className="flex gap-10 font-medium text-gray-800">
            <li>
              <Link to="/" className="transition hover:text-orange-500">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-orange-500">
                About
              </Link>
            </li>

            <li>
              <Link to="/programs" className="transition hover:text-orange-500">
                Programs
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-orange-500">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/donate" className="transition hover:text-orange-500">
                Donate
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl">
            <Mail className="cursor-pointer text-gray-700 transition duration-300 hover:text-orange-500" />

            <FaFacebook className="cursor-pointer text-blue-600 transition duration-300 hover:scale-110" />

            <FaInstagram className="cursor-pointer text-pink-500 transition duration-300 hover:scale-110" />

            <FaLinkedin className="cursor-pointer text-blue-700 transition duration-300 hover:scale-110" />

            <FaXTwitter className="cursor-pointer text-gray-900 transition duration-300 hover:scale-110" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center justify-between border-t border-gray-200 pt-4 text-sm text-gray-700 md:flex-row">
          <p>© 2026 Mamta Samajik Sanstha. All Rights Reserved.</p>

          <p>
            Design & Developed By{" "}
            <span className="font-semibold text-orange-500">CatLium</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
