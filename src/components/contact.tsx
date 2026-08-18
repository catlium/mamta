import { Mail, MapPin, Phone, Send } from "lucide-react"
import { type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get("name")
    const email = data.get("email")
    const phone = data.get("phone")
    const subject = data.get("subject")
    const message = data.get("message")

    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`
    window.open(
      `mailto:mamtasamajeeksansta@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${body}`,
      "_blank",
    )
    form.reset()
  }
  return (
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
            Have a question about our programs or want to explore an opportunity
            to work together? Reach out to our team.
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
                  Nagpur, Maharashtra, India
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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>

                  <Input id="name" name="name" type="text" placeholder="Your name" />
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

                  <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
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
  )
}

export default Contact
