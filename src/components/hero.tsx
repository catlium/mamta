import { ArrowRight, CheckCircle } from "lucide-react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"

import womenImage from "../assets/hero/women.jpg"
import educationImage from "../assets/hero/education.jpg"
import healthImage from "../assets/hero/health.jpg"
import youthImage from "../assets/hero/youth.jpg"
import { useEffect, useState } from "react"

type HeroImage = {
  src: string
  alt: string
}

const heroImages: HeroImage[] = [
  {
    src: womenImage,
    alt: "Women empowerment initiative",
  },
  {
    src: educationImage,
    alt: "Education initiative",
  },
  {
    src: healthImage,
    alt: "Community health initiative",
  },
  {
    src: youthImage,
    alt: "Youth development initiative",
  },
]

function Hero() {
  const [images, setImages] = useState(heroImages)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsAnimating(true)

      window.setTimeout(() => {
        setImages((current) => {
          const [first, ...rest] = current

          return [...rest, first]
        })

        setIsAnimating(false)
      }, 650)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [])
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,hsl(var(--primary)/0.10),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_90%,hsl(var(--secondary)/0.35),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
        {/* Left */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Serving communities since 2010
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-4xl leading-[1.08] font-black tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Creating <span className="text-primary">Opportunities.</span>
            <br />
            Restoring <span className="text-primary">Dignity.</span>
            <br />
            Transforming <span className="text-primary">Communities.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Mamta Samajeek Sansta works alongside communities across Maharashtra
            to create meaningful change through education, healthcare, womens
            empowerment, livelihood development, disaster relief, and social
            justice.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="group rounded-full px-7">
              <Link to="/donate">
                Support Our Mission
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="rounded-full px-7">
              <Link to="/programs">Explore Our Work</Link>
            </Button>
          </div>

          {/* Trust statement */}
          <p className="mt-8 text-sm text-muted-foreground">
            Working with communities to create opportunities, dignity, and
            lasting change.
          </p>
        </div>

        {/* Right */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          {/* Decorative shape */}
          <div className="absolute -top-3 -right-3 h-full w-full rounded-[2rem] bg-primary/15 sm:-top-5 sm:-right-5" />

          {/* Image Stack */}
          <div className="relative aspect-[4/5] w-full">
            {images.map((image, index) => {
              const isTop = index === 0

              return (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 h-full w-full rounded-[2rem] border bg-muted object-cover shadow-xl transition-all duration-700 ease-in-out ${
                    isTop && isAnimating
                      ? "-translate-x-16 -translate-y-6 rotate-6 opacity-0"
                      : ""
                  } `}
                  style={{
                    zIndex: images.length - index,
                    transform:
                      isTop && isAnimating
                        ? undefined
                        : `translate(${index * 10}px, ${
                            index * 10
                          }px) scale(${1 - index * 0.035})`,
                  }}
                />
              )
            })}
          </div>

          {/* Credentials */}
          <div className="absolute -bottom-7 -left-4 z-30 w-[calc(100%-2rem)] max-w-xs rounded-2xl border bg-background/95 p-5 shadow-xl backdrop-blur sm:-left-8">
            <p className="mb-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Our Credentials
            </p>

            <div className="space-y-3">
              <Credential text="CSR Registered" />
              <Credential text="12A Certified" />
              <Credential text="80G Tax Exemption" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Credential({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}

export default Hero
