// import logo from "../assets/logo.png";

import { Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-8 py-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <img
            // src={logo}
            alt="Mamta Logo"
            className="h-12"
          />

          {/* Navigation */}
          <ul className="flex gap-10 font-medium text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Programs</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl">
            <Mail className="cursor-pointer hover:text-orange-500 transition duration-300" />

            <FaFacebook className="cursor-pointer text-blue-600 hover:scale-110 transition duration-300" />

            <FaInstagram className="cursor-pointer text-pink-500 hover:scale-110 transition duration-300" />

            <FaLinkedin className="cursor-pointer text-blue-700 hover:scale-110 transition duration-300" />

            <FaXTwitter className="cursor-pointer text-black hover:scale-110 transition duration-300" />
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2026 Mamta Samajik Sanstha. All Rights Reserved.</p>

          <p>
            Design & Developed By{" "}
            <span className="font-semibold text-orange-500">
              CatLium
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;