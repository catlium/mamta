import {
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B3D91] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">

          <p className="text-orange-500 font-semibold uppercase">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold text-black mt-2 mb-8">
            Get In Touch
          </h2>

          <form
            action="https://formsubmit.co/your@email.com"
            method="POST"
            className="space-y-5"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Contact Form Submission" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-orange-600 transition"
            >
              Send Message
              <Send size={18} />
            </button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="text-white">

          <p className="text-orange-400 uppercase font-semibold">
            Let's Connect
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Create Impact Together
          </h2>

          <p className="mt-6 text-blue-100 leading-8">
            Whether you'd like to support our mission, partner with us,
            volunteer, or learn more about our programs, we'd love to hear
            from you.
          </p>

          <div className="space-y-6 mt-10">

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <MapPin />
              </div>

              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-blue-100">
                  Nagpur, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <Phone />
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-blue-100">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <Mail />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-blue-100">
                  info@mamtango.org
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;