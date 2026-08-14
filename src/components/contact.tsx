import { MapPin, Phone, Mail, Send } from "lucide-react"

function Contact() {
  return (
    <section id="contact" className="bg-[#0B3D91] px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          <p className="font-semibold text-orange-500 uppercase">Contact Us</p>

          <h2 className="mt-2 mb-8 text-4xl font-bold text-black">
            Get In Touch
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-white transition hover:bg-orange-600"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-white">
          <p className="font-semibold text-orange-400 uppercase">
            Let's Connect
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Create Impact Together
          </h2>

          <p className="mt-6 leading-8 text-blue-100">
            Whether you'd like to support our mission, partner with us,
            volunteer, or learn more about our programs, we'd love to hear from
            you.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-orange-500 p-3">
                <MapPin />
              </div>

              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-blue-100">Nagpur, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-orange-500 p-3">
                <Phone />
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-blue-100">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-orange-500 p-3">
                <Mail />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-blue-100">info@mamtango.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
