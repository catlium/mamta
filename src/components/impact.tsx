import {
  Home,
  School,
  HandCoins,
  Tractor,
  Droplets,
  TriangleAlert,
  Heart,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

type CardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

function ImpactCard({ icon, title, description }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-500">
          {icon} <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  )
}

function Programs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <h2 className="mb-14 text-center text-4xl font-bold text-orange-500">
        Creating Measurable Change
      </h2>

      {/* Row 1 */}
      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <ImpactCard
          icon={<Home size={28} />}
          title="Poor House"
          description="Families continue living in temporary
          mud houses vulnerable to rain, floods,
          and harsh weather. Unsafe housing
          impacts children's education and 
          overall health."
        />

        <ImpactCard
          icon={<School size={28} />}
          title="School Sanitation"
          description="Families continue living in temporary
          mud houses vulnerable to Many rural schools lack proper sanitation 
          facilities, especially for adolescent girls, leading to
          absenteeism and school dropouts."
        />
      </div>

      {/* Row 2 */}
      <div className="mb-8 grid gap-8 md:grid-cols-3">
        <ImpactCard
          icon={<HandCoins size={28} />}
          title="Sustainable Livelihood"
          description="Many families lose their primary source of income due to poverty,crop failure, or social challenges. 
          Limited employment opportunities leave households struggling to meet basic needs."
        />

        <ImpactCard
          icon={<Tractor size={28} />}
          title="Farmer Challenge"
          description="Small farmers often lack irrigation, financial resources, and modern equipment,
          making cultivation difficult and increasing financial stress."
        />

        <ImpactCard
          icon={<Heart size={28} />}
          title="Women's Sanitation"
          description="Lack of toilets and private sanitation facilities 
          puts women and  girls at risk, affecting their health,
          dignity, and safety every single day."
        />
      </div>

      {/* Row 3 */}
      <div className="grid gap-8 md:grid-cols-2">
        <ImpactCard
          icon={<Droplets size={28} />}
          title="Water Scarcity"
          description="Thousands of women and adolescent girls walk several kilometers every day carrying heavy water containers.
          This daily struggle affects their health, education, and productivity while consuming valuable time that could otherwise
          be spent on work or school"
        />

        <ImpactCard
          icon={<TriangleAlert size={28} />}
          title="Unsafe Drinking Water"
          description="Many rural families rely on contaminated wells and untreated water sources 
          containing bacteria and harmful minerals. Unsafe drinking water contributes to illness, poor health, and reduced quality of life."
        />
      </div>
    </section>
  )
}

export default Programs
