import { CheckCircle } from "lucide-react"
import heroImage from "../assets/hero.png"

function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-20">
      {/* Left Side */}
      <div className="md:w-1/2">
        <p className="inline-block rounded-full bg-orange-100 px-4 py-2 font-medium text-orange-600">
          Change the World Together
        </p>

        <h1 className="mt-6 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
          Creating <span className="text-blue-600">Opportunities.</span>
          <br />
          Restoring <span className="text-blue-600">Dignity.</span>
          <br />
          Transforming <span className="text-blue-600">Communities.</span>
        </h1>

        <p className="mt-6 leading-8 text-gray-600">
          Since 2010, Mamta Samajeek Sansta has worked alongside communities
          across Maharashtra to improve lives through education, healthcare,
          women's empowerment, livelihood development, disaster relief and
          social justice.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600">
            Contact Us
          </button>

          <button className="rounded-full border border-orange-500 px-6 py-3 text-orange-500 transition hover:bg-orange-50">
            Explore Programs
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center md:w-1/2">
        <div className="relative">
          {/* Orange Background */}
          <div className="absolute top-0 right-0 h-[460px] w-[380px] rounded-3xl bg-orange-400"></div>

          {/* Hero Image */}
          <img
            src={heroImage}
            alt="Hero"
            className="relative z-10 mt-5 mr-5 h-[470px] w-[380px] rounded-3xl object-cover shadow-xl"
          />

          {/* White Certification Card */}
          <div className="absolute bottom-6 left-0 z-20 w-60 rounded-2xl bg-white p-5 shadow-xl">
            <div className="mb-3 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium text-gray-800">CSR Registered</span>
            </div>

            <div className="mb-3 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium text-gray-800">12A Certified</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium text-gray-800">
                80G Tax Exemption
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
