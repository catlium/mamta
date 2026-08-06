import { Eye, Goal, ArrowRight } from "lucide-react";

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      {/* Section Heading */}
      <h2 className="mb-16 text-center text-5xl font-bold text-orange-500">
        About Us
      </h2>

      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Side */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://via.placeholder.com/300x420"
            alt="About 1"
            className="h-[420px] w-full rounded-3xl object-cover"
          />

          <img
            src="https://via.placeholder.com/300x420"
            alt="About 2"
            className="mt-10 h-[420px] w-full rounded-3xl object-cover"
          />

          <img
            src="https://via.placeholder.com/620x220"
            alt="About 3"
            className="col-span-2 h-56 w-full rounded-3xl object-cover"
          />
        </div>

        {/* Right Side */}
        <div>
          {/* Who We Are */}
          <h2 className="mb-6 text-5xl font-bold text-orange-500">
            Who We Are
          </h2>

          <h3 className="text-4xl font-bold leading-tight">
            Building Stronger Communities Through
            <span className="text-blue-600">
              {" "}
              Compassion & Action
            </span>
          </h3>

          <p className="mt-6 leading-8 text-gray-600">
            Mamta Samajik Sanstha is committed to improving education,
            healthcare, women empowerment, sanitation and sustainable
            livelihoods. Together with communities and volunteers, we
            create long-term positive impact and meaningful change.
          </p>

          {/* Mission & Vision */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border hover:border-orange-500 hover:shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-100 p-3 transition group-hover:bg-orange-500">
                  <Goal
                    size={22}
                    className="text-orange-500 group-hover:text-white"
                  />
                </div>

                <h3 className="text-xl font-bold group-hover:text-orange-500">
                  Mission
                </h3>
              </div>

              <p className="mt-4 leading-7 text-gray-600">
                Empower communities through education, healthcare,
                livelihood opportunities and sustainable development.
              </p>
            </div>

            {/* Vision */}
            <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border hover:border-blue-500 hover:shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3 transition group-hover:bg-blue-500">
                  <Eye
                    size={22}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                <h3 className="text-xl font-bold group-hover:text-blue-600">
                  Vision
                </h3>
              </div>

              <p className="mt-4 leading-7 text-gray-600">
                Build an inclusive society where everyone has equal
                opportunities, dignity and a better future.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-white transition hover:bg-orange-600">
            Learn More
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;