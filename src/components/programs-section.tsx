import {
  BookOpen,
  HeartPulse,
  Users,
  BriefcaseBusiness,
  HandHeart,
  Baby,
  Droplets,
  ShieldCheck,
} from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

const programs = [
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Supporting students through school materials, financial assistance, digital education, computer literacy, and improved learning facilities.",
  },
  {
    icon: HeartPulse,
    title: "Health & Nutrition",
    description:
      "Improving access to healthcare through health campaigns, nutrition support for pregnant women and children, and assistance to vulnerable families.",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description:
      "Helping women build skills, access employment opportunities, form self-help groups, and connect with government schemes.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Youth & Livelihoods",
    description:
      "Supporting young people through skill development, employment opportunities, and access to government services and schemes.",
  },
  {
    icon: HandHeart,
    title: "Humanitarian Support",
    description:
      "Providing essential support to families and vulnerable communities during difficult situations, emergencies, and humanitarian crises.",
  },
  {
    icon: Baby,
    title: "Child Development",
    description:
      "Working towards the wellbeing, protection, education, and rehabilitation of children facing vulnerable circumstances.",
  },
  {
    icon: Droplets,
    title: "Menstrual Hygiene",
    description:
      "Creating awareness around menstrual health and supporting access to sanitary products, including sanitary cup distribution.",
  },
  {
    icon: ShieldCheck,
    title: "Social Justice",
    description:
      "Supporting marginalized communities through awareness, advocacy, rehabilitation, and initiatives promoting equality and dignity.",
  },
]

function ProgramsSection() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
          What We Do
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Turning Community Needs{" "}
          <span className="text-primary">Into Action.</span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          From education and healthcare to livelihoods and social justice, our
          work responds to the diverse needs of communities and helps create
          opportunities for a better future.
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full"
      >
        <CarouselContent className="-ml-4">
          {programs.map((program) => {
            const Icon = program.icon

            return (
              <CarouselItem
                key={program.title}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col">
                    <p className="text-sm leading-6 text-muted-foreground">
                      {program.description}
                    </p>

                    <Button variant="link" className="mt-4 w-fit px-0">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <div className="mt-8 flex justify-center gap-3">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  )
}

export default ProgramsSection
