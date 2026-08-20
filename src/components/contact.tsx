import { Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function Contact() {
  return (
    <>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Create <span className="text-primary">Impact Together.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Whether you want to support our work, partner with us, volunteer, or
            simply learn more about our initiatives, we'd love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold">We'd love to hear from you.</h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              Have a question about our programs or want to explore an
              opportunity to work together? Reach out to our team.
            </p>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Address</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Shivraj Bhavan, Building No. 2, Room No. 88,
                    <br />
                    B.M. Marg, Elphinston Road,
                    <br />
                    Mumbai - 400016, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/20 text-secondary-foreground">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>

                  <a
                    href="tel:+919867498367"
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                  >
                    +91 98674 98367
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Email</p>

                  <a
                    href="mailto:mamtasamajeeksansta@gmail.com"
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                  >
                    mamtasamajeeksansta@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Send us a message</h3>

              <p className="text-sm text-muted-foreground">
                Fill in the details below and our team will get back to you.
              </p>
            </CardHeader>

            <CardContent>
              <form
                className="space-y-5"
                action="https://formsubmit.co/mamtasamajeeksansta@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_next"
                  value={window.location.href}
                />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>

                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>

                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>

                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>

                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                  />
                </div>

                <Button type="submit" className="rounded-full">
                  Send Message
                  <Send />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Google Map */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Find Us
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our <span className="text-primary">Location</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Visit us at our office in Mumbai, Maharashtra.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d514.4168572292673!2d72.83429831643!3d19.00674001463528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee950218db1%3A0xe6473058e1b741e6!2sShivraj%20Bhavan%2C%20Saidham%20Nagar%2C%20Parel%2C%20Mumbai%2C%20Maharashtra%20400013!5e1!3m2!1sen!2sin!4v1787231591906!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Mamta Samajeek Sansta Office Location"
          />
        </div>
      </section>
    </>
  )
}

export default Contact
