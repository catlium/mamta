import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { programs } from "@/lib/contants/program-data"

function ProgramsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero / Cover Section */}
      <section className="bg-blue-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold tracking-wide text-orange-400 uppercase">
            What We Do
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Our Programs</h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            We work alongside communities to create opportunities, improve lives
            and build a better future through meaningful field-based programs.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Work</h2>

          <p className="mt-2 max-w-2xl text-gray-600">
            Explore our programs and learn how we are working with communities
            across different areas.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Cover Image */}
              <img
                src={program.image}
                alt={program.title}
                className="h-56 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold tracking-wide text-orange-500 uppercase">
                  {program.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {program.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {program.description}
                </p>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-700">
                      Location:
                    </span>{" "}
                    {program.location}
                  </p>
                </div>

                {/* Learn More */}
                <Link
                  to={`/programs/${program.id}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProgramsPage
