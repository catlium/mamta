import {
  Home,
  School,
  HandCoins,
  Tractor,
  Droplets,
  TriangleAlert,
  Heart,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card"

type ImpactCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

function ImpactCard({ icon, title, description, className }: ImpactCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>

        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-sm leading-6">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

function Programs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
          Where Change Begins
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          The Challenges We{" "}
          <span className="text-primary">Work to Change.</span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Communities face challenges that affect their health, education,
          livelihoods, safety, and dignity. Our work focuses on addressing these
          challenges and creating opportunities for a better future.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid gap-5 md:grid-cols-4 md:grid-rows-2">
        {/* Large card */}
        <ImpactCard
          className="md:col-span-2 md:row-span-2"
          icon={<Home className="h-6 w-6" />}
          title="Safe & Dignified Housing"
          description="Families continue living in temporary mud houses vulnerable to rain, floods, and harsh weather. Unsafe housing affects children's education, family health, and overall quality of life."
        />

        {/* Wide card */}
        <ImpactCard
          className="md:col-span-2"
          icon={<School className="h-6 w-6" />}
          title="School Sanitation"
          description="Many rural schools lack proper sanitation facilities, especially for adolescent girls, leading to absenteeism and school dropouts."
        />

        {/* Small cards */}
        <ImpactCard
          icon={<HandCoins className="h-6 w-6" />}
          title="Sustainable Livelihoods"
          description="Limited employment opportunities and financial insecurity leave families struggling to meet their basic needs."
        />

        <ImpactCard
          icon={<Tractor className="h-6 w-6" />}
          title="Farmer Challenges"
          description="Small farmers often lack irrigation, financial resources, and modern equipment, increasing financial stress."
        />

        {/* Bottom row */}
        <ImpactCard
          icon={<Droplets className="h-6 w-6" />}
          title="Water Scarcity"
          description="Women and girls often spend hours collecting water, affecting their health, education, and livelihoods."
        />

        <ImpactCard
          icon={<TriangleAlert className="h-6 w-6" />}
          title="Unsafe Drinking Water"
          description="Communities relying on contaminated water sources face preventable illness and long-term health challenges."
        />

        <ImpactCard
          className="md:col-span-2"
          icon={<Heart className="h-6 w-6" />}
          title="Women's Health & Dignity"
          description="Limited access to private sanitation facilities affects the health, safety, and dignity of women and girls."
        />
      </div>
    </section>
  )
}

export default Programs
