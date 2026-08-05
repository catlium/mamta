import { Eye, Goal, ArrowRight } from "lucide-react";

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-center text-orange-500 mb-16">
        About Us
      </h2>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://via.placeholder.com/300x420"
            alt="About 1"
            className="w-full h-[420px] object-cover rounded-3xl"
          />

          <img
            src="https://via.placeholder.com/300x420"
            alt="About 2"
            className="w-full h-[420px] object-cover rounded-3xl mt-10"
          />

          <img
            src="https://via.placeholder.com/620x220"
            alt="About 3"
            className="col-span-2 w-full h-56 object-cover rounded-3xl"
          />
        </div>

        {/* Right Side */}
        <div>
          <p className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-medium">
            Who We Are
          </p>

          <h2 className="text-4xl font-bold mt-5 leading-tight">
            Building Stronger Communities Through
            <span className="text-blue-600">
              {" "}
              Compassion & Action
            </span>
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Mamta Samajik Sanstha is committed to improving education,
            healthcare, women empowerment, sanitation and sustainable
            livelihoods. Together with communities and volunteers, we
            create long-term positive impact and meaningful change.
          </p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* Mission */}
            <div className="group bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border hover:border-orange-500 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-full transition group-hover:bg-orange-500">
                  <Goal
                    size={22}
                    className="text-orange-500 group-hover:text-white"
                  />
                </div>

                <h3 className="text-xl font-bold group-hover:text-orange-500">
                  Mission
                </h3>
              </div>

              <p className="text-gray-600 mt-4 leading-7">
                Empower communities through education, healthcare,
                livelihood opportunities and sustainable development.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border hover:border-blue-500 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full transition group-hover:bg-blue-500">
                  <Eye
                    size={22}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                <h3 className="text-xl font-bold group-hover:text-blue-600">
                  Vision
                </h3>
              </div>

              <p className="text-gray-600 mt-4 leading-7">
                Build an inclusive society where everyone has equal
                opportunities, dignity and a better future.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 flex items-center gap-2 bg-orange-500 text-white px-7 py-3 rounded-full hover:bg-orange-600 transition">
            Learn More
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;