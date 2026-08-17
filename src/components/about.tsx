import { ArrowRight, Eye, Goal } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Link } from "react-router"

// ADD IMAGES
import aboutImage1 from "../assets/about/about1.jpg"
import aboutImage2 from "../assets/about/about2.jpg"
import aboutImage3 from "../assets/about/about3.jpg"

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      {/* Section Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
          About Us
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Working Alongside Communities{" "}
          <span className="text-primary">Since 2010.</span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Building opportunities, strengthening communities, and working towards
          a society where every person can live with dignity and equal
          opportunity.
        </p>
      </div>

      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Large image */}
          <div className="overflow-hidden rounded-2xl border bg-muted">
            <img
              src={aboutImage1}
              alt="Community initiative"
              className="aspect-3/4 w-full object-cover"
            />
          </div>

          {/* Second image */}
          <div className="mt-10 overflow-hidden rounded-2xl border bg-muted">
            <img
              src={aboutImage2}
              alt="Women empowerment initiative"
              className="aspect-3/4 w-full object-cover"
            />
          </div>

          {/* Wide image */}
          <div className="col-span-2 overflow-hidden rounded-2xl border bg-muted">
            <img
              src={aboutImage3}
              alt="Community development initiative"
              className="aspect-3/1 w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Who We Are
          </p>

          <h3 className="mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            Creating opportunities for people to build a{" "}
            <span className="text-primary">better future.</span>
          </h3>

          <div className="mt-6 space-y-4 text-muted-foreground">
            <p className="leading-7">
              Mamta Samajik Sanstha is a community-focused organization working
              to improve the lives of people through education, healthcare,
              women's empowerment, livelihood development, social justice, and
              humanitarian support.
            </p>

            <p className="leading-7">
              Since 2010, we have worked alongside communities across
              Maharashtra, responding to local needs and creating opportunities
              for people to become more self-reliant and secure.
            </p>

            <p className="leading-7">
              Our approach is rooted in participation, dignity, and
              sustainability. We believe lasting change happens when communities
              are empowered to become active participants in their own
              development.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Goal className="h-5 w-5" />
                </div>

                <CardTitle>Our Mission</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  To empower communities through education, healthcare,
                  livelihood opportunities, social awareness, and sustainable
                  development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/20 text-secondary-foreground">
                  <Eye className="h-5 w-5" />
                </div>

                <CardTitle>Our Vision</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  A society where communities have equal and just opportunities,
                  self-reliance, dignity, and the ability to build a better
                  future.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <Button variant="link" className="mt-8 rounded-full p-4">
            <Link to="/about" className="flex items-center gap-2">
              Learn More About Our Work
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default About