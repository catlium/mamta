import { Construction, Globe, HeartHandshake, Mail, Phone } from "lucide-react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6"

function UnderDevelopment() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb20_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb20_1px,transparent_1px)] bg-size-[56px_56px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      {/* Hero */}
      <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border bg-primary/5">
          <HeartHandshake className="h-12 w-12 text-primary" />
        </div>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground">
          <Construction className="h-4 w-4" />
          Website Under Development
        </span>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          Mamta Samajeek Sansta
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          A society where communities live with fullness of life with equal and
          just opportunities, self-reliance and dignity
        </p>

        {/* Contact */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            mamtasamajeeksansta@gmail.com
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            +91 98674 98367
          </div>

          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            Coming Soon
          </div>
        </div>

        {/* Social */}
        <div className="mt-10 flex items-center gap-6 text-2xl">
          <a
            href="https://www.facebook.com/share/1Cyfpk3vsT/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-primary"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/mamtasamajeeksansta2010?igsh=Y29wMGo2a2x1NGdu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-primary"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/mamta-samajeek-sansta-bb118b235?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-primary"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/MamtaSamajeek10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:text-primary"
          >
            <FaXTwitter />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-8 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase">
              Designed & Engineered by
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-[0.3em]">
              CATLIUM
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Digital Solutions for NGOs, Businesses & Startups
            </p>
          </div>

          <div className="space-y-2">
            <a
              href="https://catlium.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-medium text-primary transition hover:underline"
            >
              catlium
            </a>

            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mamta Samajeek Sansta. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default UnderDevelopment
