import { Link } from "react-router"
import { ArrowRight, MapPin } from "lucide-react"
import { programs } from "@/lib/contants/program-data"

function ProgramsPage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_10%,hsl(var(--primary)/0.10),transparent_30%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_45%,hsl(var(--secondary)/0.20),transparent_30%)]" />

      {/* =====================================================
          HERO / COVER SECTION
      ===================================================== */}
      <section className="relative px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary" />

            <span>Creating meaningful impact since 2010</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl leading-[1.08] font-black tracking-tight sm:text-5xl lg:text-6xl">
            Our <span className="text-primary">Programs.</span>
            <br />
            Creating <span className="text-primary">Meaningful Change.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            We work alongside communities to create opportunities, improve
            lives, and build a stronger and more sustainable future through
            meaningful field-based programs.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROGRAMS SECTION
      ===================================================== */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-10">
            <p className="font-semibold tracking-wide text-secondary uppercase">
              Our Work
            </p>

            <h2 className="mt-2 text-3xl leading-tight font-bold md:text-4xl">
              Programs That <span className="text-primary">Create Impact</span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Explore our programs and learn how we work with communities across
              different areas to create lasting change.
            </p>
          </div>

          {/* =================================================
              PROGRAM CARDS
          ================================================= */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.id}
                className="group overflow-hidden rounded-[2rem] border bg-background shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-60 w-full object-cover transition duration-700 ease-in-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Category */}
                  <div className="absolute top-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold tracking-wide text-primary backdrop-blur">
                    {program.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-7">
                  {/* Title */}
                  <h3 className="text-2xl font-bold tracking-tight">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {program.description}
                  </p>

                  {/* Location */}
                  <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 text-secondary" />

                    <span>{program.location}</span>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-border" />

                  {/* Learn More */}
                  <Link
                    to={`/programs/${program.id}`}
                    className="group/link inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                  >
                    Learn More
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT SECTION
      ===================================================== */}
      <section className="relative px-6 py-20 md:py-24">
        {/* Decorative Shape */}
        <div className="absolute inset-x-6 top-0 -z-10 mx-auto h-full max-w-7xl rounded-[2rem] bg-secondary/10" />

        <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
          {/* Eyebrow */}
          <p className="font-semibold tracking-wide text-secondary uppercase">
            Be Part Of The Change
          </p>

          {/* Heading */}
          <h2 className="mt-3 text-3xl leading-tight font-bold md:text-4xl">
            Every Action Can{" "}
            <span className="text-primary">Create An Impact</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            Support our work by volunteering, partnering with us, or
            contributing towards community development. Together, we can create
            opportunities and build stronger communities.
          </p>

          {/* CTA */}
          <Link
            to="/donate"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
          >
            Support Our Work
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProgramsPage
