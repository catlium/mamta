import { CheckCircle } from "lucide-react";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Left Side */}
      <div className="md:w-1/2">
        <p className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-medium">
          Change the World Together
        </p>

        <h1 className="text-5xl font-bold mt-6 leading-tight">
          Creating <span className="text-blue-600">Opportunities.</span>
          <br />
          Restoring <span className="text-blue-600">Dignity.</span>
          <br />
          Transforming <span className="text-blue-600">Communities.</span>
        </h1>

        <p className="text-gray-600 mt-6 leading-8">
          Since 2010, Mamta Samajeek Sansta has worked alongside communities
          across Maharashtra to improve lives through education, healthcare,
          women's empowerment, livelihood development, disaster relief and
          social justice.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Contact Us
          </button>

          <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-50 transition">
            Explore Programs
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          {/* Orange Background */}
          <div className="absolute top-0 right-0 w-[380px] h-[460px] bg-orange-400 rounded-3xl"></div>

          {/* Hero Image */}
          <img
            src={heroImage}
            alt="Hero"
           className="relative z-10 w-[380px] h-[470px] object-cover rounded-3xl mt-5 mr-5 shadow-xl"
          />

          {/* White Certification Card */}
          <div className="absolute bottom-6 left-0 z-20 bg-white rounded-2xl shadow-xl p-5 w-60">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span className="font-medium">CSR Registered</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span className="font-medium">12A Certified</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span className="font-medium">80G Tax Exemption</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;