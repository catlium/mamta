import { Link, useParams } from "react-router"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Heart,
  MapPin,
  Users,
} from "lucide-react"

import { programs } from "@/lib/contants/program-data"

function SingleProgramPage() {
  const { id } = useParams()

  const program = programs.find((item) => item.id === id)

  // =====================================================
  // PROGRAM NOT FOUND
  // =====================================================

  if (!program) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <Heart className="h-8 w-8 text-secondary" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-foreground">
            Program Not Found
          </h1>

          <p className="mt-3 leading-7 text-muted-foreground">
            The program you are looking for does not exist or may have been
            removed.
          </p>

          <Link
            to="/programs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition hover:opacity-90"
          >
            <ArrowLeft size={18} />
            Back to Programs
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* =====================================================
          1. PROGRAM COVER
      ===================================================== */}

      <section className="relative">
        {/* Cover Image */}
        <img
          src={program.image}
          alt={program.title}
          className="h-[420px] w-full object-cover md:h-[500px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Cover Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-3xl text-white">
              <p className="font-semibold tracking-wider text-secondary uppercase">
                {program.category}
              </p>

              <h1 className="mt-4 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                {program.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                {program.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. MAIN CONTENT
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Back to Programs */}

        <Link
          to="/programs"
          className="mb-10 inline-flex items-center gap-2 text-muted-foreground transition hover:text-secondary"
        >
          <ArrowLeft size={18} />
          Back to Programs
        </Link>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="lg:col-span-2">
            {/* -------------------------------------------------
                ABOUT PROGRAM
            ------------------------------------------------- */}

            <section>
              <p className="font-semibold tracking-wider text-secondary uppercase">
                About The Program
              </p>

              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                {program.title}
              </h2>

              <p className="mt-6 leading-8 text-muted-foreground">
                {program.description}
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                This program is designed to work closely with communities and
                understand their needs. Through field-based activities,
                volunteers and community members can work together to create
                meaningful and sustainable change.
              </p>
            </section>

            {/* -------------------------------------------------
                OBJECTIVES
            ------------------------------------------------- */}

            <section className="mt-14">
              <p className="font-semibold tracking-wider text-secondary uppercase">
                Our Goals
              </p>

              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Program Objectives
              </h2>

              <div className="mt-7 space-y-4">
                {program.objectives.map((objective) => (
                  <div
                    key={objective}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition duration-300 hover:shadow-md"
                  >
                    <div className="shrink-0 rounded-full bg-secondary/10 p-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>

                    <p className="leading-7 text-muted-foreground">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------
                FIELD ACTIVITIES
            ------------------------------------------------- */}

            <section className="mt-14">
              <p className="font-semibold tracking-wider text-secondary uppercase">
                Field Work
              </p>

              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Field Activities
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                Our field activities focus on direct community participation and
                practical implementation.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {program.activities.map((activity, index) => (
                  <div
                    key={activity}
                    className="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="pt-1 leading-7 font-medium text-foreground">
                        {activity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------
                FIELD WORK REQUIREMENTS
            ------------------------------------------------- */}

            <section className="mt-14">
              <p className="font-semibold tracking-wider text-secondary uppercase">
                Participation
              </p>

              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Field Work Requirements
              </h2>

              <p className="mt-3 leading-7 text-muted-foreground">
                The following requirements help volunteers and field workers
                participate effectively in the program.
              </p>

              <div className="mt-7 rounded-2xl border border-border bg-muted p-6 md:p-8">
                <ul className="space-y-5">
                  {program.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />

                      <span className="leading-7 text-foreground">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside>
            <div className="sticky top-24 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-7">
              {/* Icon */}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-foreground">
                Program Information
              </h2>

              {/* Category */}

              <div className="mt-7 border-b border-border pb-5">
                <p className="text-sm text-muted-foreground">Category</p>

                <p className="mt-1 font-semibold text-foreground">
                  {program.category}
                </p>
              </div>

              {/* Location */}

              <div className="border-b border-border py-5">
                <p className="text-sm text-muted-foreground">Location</p>

                <div className="mt-2 flex items-start gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />

                  <p className="font-semibold text-foreground">
                    {program.location}
                  </p>
                </div>
              </div>

              {/* Activities */}

              <div className="border-b border-border py-5">
                <p className="text-sm text-muted-foreground">
                  Field Activities
                </p>

                <p className="mt-1 font-semibold text-foreground">
                  {program.activities.length} Activities
                </p>
              </div>

              {/* Requirements */}

              <div className="py-5">
                <p className="text-sm text-muted-foreground">Requirements</p>

                <p className="mt-1 font-semibold text-foreground">
                  {program.requirements.length} Requirements
                </p>
              </div>

              {/* Get Involved */}

              <div className="mt-2 rounded-2xl bg-secondary/10 p-5">
                <h3 className="font-bold text-foreground">
                  Want to Get Involved?
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Support this program by volunteering, contributing or helping
                  us reach more communities.
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 font-semibold text-secondary-foreground transition hover:opacity-90"
                >
                  Get Involved
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          3. BOTTOM CTA
      ===================================================== */}

      <section className="bg-primary px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold tracking-wider text-secondary uppercase">
            Support Community Development
          </p>

          <h2 className="mt-3 text-3xl font-bold text-primary-foreground md:text-4xl">
            Together We Can Create Meaningful Change
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-primary-foreground/80">
            Every contribution, volunteer effort and partnership can help us
            create more opportunities and strengthen communities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3 font-semibold text-secondary-foreground transition hover:opacity-90"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3 font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SingleProgramPage
