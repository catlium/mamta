import { Home, ArrowRight, RefreshCw } from "lucide-react"
import { Link, useRouteError, isRouteErrorResponse } from "react-router"
import { Button } from "@/components/ui/button"

function ErrorPage() {
  const error = useRouteError()

  let title = "Something went wrong"
  let message = "An unexpected error occurred. Please try again later."

  if (isRouteErrorResponse(error)) {
    if (error.status === 403) {
      title = "Access Denied"
      message = "You don't have permission to access this page."
    } else if (error.status === 500) {
      title = "Server Error"
      message = "Something went wrong on our end. Please try again later."
    }
  }

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden px-6 py-20 md:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,hsl(var(--primary)/0.10),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_90%,hsl(var(--secondary)/0.20),transparent_30%)]" />

        <div className="mx-auto max-w-3xl text-center">
          {/* Error Icon */}
          <div className="mb-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
              <span className="text-4xl font-bold text-destructive">!</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>

          <p className="mb-10 text-lg leading-8 text-muted-foreground">
            {message}
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

            <Button size="lg" variant="outline" className="rounded-full px-7">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2"
              >
                <RefreshCw className="size-4" />
                Try Again
              </button>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ErrorPage
