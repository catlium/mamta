import { Home, ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"

function NotFoundPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden px-6 py-20 md:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,hsl(var(--primary)/0.10),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_90%,hsl(var(--secondary)/0.20),transparent_30%)]" />

        <div className="mx-auto max-w-3xl text-center">
          {/* Error Code */}
          <div className="mb-6">
            <span className="text-8xl font-black tracking-tighter text-primary/20 sm:text-9xl">
              404
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Page Not Found
          </h1>

          <p className="mb-10 text-lg leading-8 text-muted-foreground">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="group rounded-full px-7">
              <Link to="/" className="flex items-center gap-2">
                <Home className="size-4" />
                Back to Home
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
