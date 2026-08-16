import { Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo */}
          <Link to="/">
            <div>
              <h1 className="text-2xl font-bold text-primary">
                MAMTA
              </h1>

              <p className="text-xs text-secondary">
                Samajik Sanstha
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 font-medium md:gap-10">
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

            <li>
              <Link
                to="/donate"
                className="text-foreground transition hover:text-secondary"
              >
                Donate
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl">

            <a
              href="mailto:info@mamtango.org"
              className="text-foreground transition duration-300 hover:text-secondary"
              aria-label="Email"
            >
              <Mail />
            </a>

            <a
              href="#"
              className="text-primary transition duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="text-secondary transition duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="text-primary transition duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="text-foreground transition duration-300 hover:scale-110"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-4 text-sm md:flex-row">

          <p className="text-muted-foreground">
            © 2026 Mamta Samajik Sanstha. All Rights Reserved.
          </p>

          <p className="text-muted-foreground">
            Design & Developed By{" "}
            <span className="font-semibold text-secondary">
              CatLium
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;