import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { programs } from "@/lib/contants/program-data"

function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* =====================================================
          HERO / COVER SECTION
      ===================================================== */}
      <section className="bg-primary px-6 py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold tracking-wide text-secondary uppercase">
            What We Do
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Our Programs</h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-primary-foreground/80">
            We work alongside communities to create opportunities, improve lives
            and build a better future through meaningful field-based programs.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROGRAMS SECTION
      ===================================================== */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-10">
            <p className="font-semibold tracking-wide text-secondary uppercase">
              Our Work
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Programs That Create Impact
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              Explore our programs and learn how we are working with communities
              across different areas.
            </p>
          </div>

          {/* =================================================
              PROGRAM CARDS
          ================================================= */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Cover Image */}
                <div className="overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category */}
                  <p className="text-sm font-semibold tracking-wide text-secondary uppercase">
                    {program.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-2xl font-bold text-card-foreground">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {program.description}
                  </p>

                  {/* Location */}
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-card-foreground">
                        Location:
                      </span>{" "}
                      {program.location}
                    </p>
                  </div>

                  {/* Learn More */}
                  <Link
                    to={`/programs/${program.id}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 font-medium text-secondary-foreground transition hover:bg-secondary/90"
                  >
                    Learn More
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="bg-muted px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold tracking-wide text-secondary uppercase">
            Be Part Of The Change
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Every Action Can Create An Impact
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            Support our work by volunteering, partnering with us or contributing
            towards community development.
          </p>

          <Link
            to="/donate"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition hover:bg-secondary/90"
          >
            Support Our Work
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProgramsPage
