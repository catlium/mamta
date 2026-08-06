// import logo from "../assets/logo.png";

import { Mail } from "lucide-react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6"

function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-7xl px-8 py-6">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <img
            // src={logo}
            alt="Mamta Logo"
            className="h-12"
          />

          {/* Navigation */}
          <ul className="flex gap-10 font-medium text-gray-700">
            <li className="cursor-pointer hover:text-orange-500">Home</li>
            <li className="cursor-pointer hover:text-orange-500">About</li>
            <li className="cursor-pointer hover:text-orange-500">Programs</li>
            <li className="cursor-pointer hover:text-orange-500">Contact</li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl">
            <Mail className="cursor-pointer transition duration-300 hover:text-orange-500" />

            <FaFacebook className="cursor-pointer text-blue-600 transition duration-300 hover:scale-110" />

            <FaInstagram className="cursor-pointer text-pink-500 transition duration-300 hover:scale-110" />

            <FaLinkedin className="cursor-pointer text-blue-700 transition duration-300 hover:scale-110" />

            <FaXTwitter className="cursor-pointer text-black transition duration-300 hover:scale-110" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center justify-between border-t pt-4 text-sm text-gray-600 md:flex-row">
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
