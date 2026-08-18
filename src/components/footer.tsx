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
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <Link to="/" className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-primary">MAMTA</h1>

            <p className="text-xs text-secondary">Samajeek Sansta</p>
          </Link>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 font-medium text-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-secondary">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="transition-colors hover:text-secondary"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/programs"
                className="transition-colors hover:text-secondary"
              >
                Programs
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition-colors hover:text-secondary"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/donate"
                className="transition-colors hover:text-secondary"
              >
                Donate
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl">
            <a
              href="mailto:mamtasamajeeksansta@gmail.com"
              aria-label="Email"
              className="text-foreground transition-colors hover:text-secondary"
            >
              <Mail />
            </a>

            <a
              href="https://www.facebook.com/share/1Cyfpk3vsT/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-foreground transition-colors hover:text-secondary"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/mamtasamajeeksansta2010?igsh=Y29wMGo2a2x1NGdu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-foreground transition-colors hover:text-secondary"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/mamta-samajeek-sansta-bb118b235?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground transition-colors hover:text-secondary"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/MamtaSamajeek10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-foreground transition-colors hover:text-secondary"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-5 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 Mamta Samajeek Sansta. All Rights Reserved.</p>

          <p>
            Design & Developed By{" "}
            <span className="font-semibold text-secondary">CatLium</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
