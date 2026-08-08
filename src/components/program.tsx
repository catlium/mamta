import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  HeartPulse,
  HandHeart,
  Tractor,
  Droplets,
  Home,
} from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Education Support",
    description:
      "Supporting children and communities with better access to education, learning resources, and opportunities for growth.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Promoting better health through healthcare support, awareness programs, and community-based initiatives.",
  },
  {
    icon: HandHeart,
    title: "Women Empowerment",
    description:
      "Creating opportunities for women through skill development, livelihood support, awareness, and financial independence.",
  },
  {
    icon: Tractor,
    title: "Sustainable Livelihood",
    description:
      "Helping families build sustainable sources of income through livelihood development and skill-based opportunities.",
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    description:
      "Working to improve access to safe drinking water, sanitation facilities, hygiene awareness, and a healthier environment.",
  },
  {
    icon: Home,
    title: "Disaster Relief",
    description:
      "Supporting vulnerable communities during disasters and helping families recover with dignity and essential resources.",
  },
]

function ProgramsPage() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="font-semibold tracking-wide text-orange-500 uppercase">
            What We Do
          </p>

          <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
            Our Programs
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            We work with communities to create opportunities, improve quality of
            life, and build a stronger and more sustainable future.
          </p>
        </div>

        {/* Programs */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon

            return (
              <Card
                key={program.title}
                className="border-0 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Icon className="text-orange-500" size={24} />
                  </div>

                  <CardTitle className="text-xl text-gray-800">
                    {program.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="leading-7 text-gray-600">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 rounded-3xl bg-blue-900 px-6 py-10 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold">Together, We Can Create Change</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Every program is designed to work alongside communities, understand
            their needs, and create meaningful long-term impact.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProgramsPage
