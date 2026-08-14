import { Link, useParams } from "react-router"
import { ArrowLeft, MapPin, CheckCircle } from "lucide-react"
import { programs } from "@/lib/contants/program-data"

function SingleProgramPage() {
  const { id } = useParams()

  const program = programs.find((item) => item.id === id)

  // Program not found
  if (!program) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Program Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The program you are looking for does not exist.
          </p>

          <Link
            to="/programs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600"
          >
            <ArrowLeft size={18} />
            Back to Programs
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Cover Section */}
      <section className="relative">
        <img
          src={program.image}
          alt={program.title}
          className="h-[420px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 text-white">
            <p className="font-semibold tracking-wide text-orange-400 uppercase">
              {program.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold md:text-6xl">
              {program.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-200">
              {program.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Back Button */}
        <Link
          to="/programs"
          className="mb-10 inline-flex items-center gap-2 text-gray-600 transition hover:text-orange-500"
        >
          <ArrowLeft size={18} />
          Back to Programs
        </Link>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                About This Program
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                {program.description}
              </p>
            </section>

            {/* Objectives */}
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Objectives
              </h2>

              <div className="mt-6 space-y-4">
                {program.objectives.map((objective) => (
                  <div key={objective} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                    <p className="text-gray-600">{objective}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Field Activities
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {program.activities.map((activity) => (
                  <div
                    key={activity}
                    className="rounded-xl bg-white p-5 shadow-sm"
                  >
                    <p className="font-medium text-gray-800">{activity}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Field Work Requirements
              </h2>

              <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
                <ul className="space-y-4">
                  {program.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />

                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside>
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900">
                Program Information
              </h3>

              {/* Category */}
              <div className="mt-6 border-b pb-4">
                <p className="text-sm text-gray-500">Category</p>

                <p className="mt-1 font-semibold text-gray-800">
                  {program.category}
                </p>
              </div>

              {/* Location */}
              <div className="border-b py-4">
                <p className="text-sm text-gray-500">Location</p>

                <div className="mt-1 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-500" />

                  <p className="font-semibold text-gray-800">
                    {program.location}
                  </p>
                </div>
              </div>

              {/* Volunteer */}
              <div className="pt-5">
                <h4 className="font-semibold text-gray-900">Want to help?</h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  You can support this program by volunteering, donating or
                  helping us reach more communities.
                </p>

                <Link
                  to="/contact"
                  className="mt-5 block rounded-full bg-orange-500 px-5 py-3 text-center font-medium text-white transition hover:bg-orange-600"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default SingleProgramPage
