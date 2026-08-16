import {
  Heart,
  Users,
  HandHeart,
  ShieldCheck,
  Leaf,
  Scale,
  Target,
  ArrowRight,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* =====================================================
          1. ABOUT MAMTA
      ===================================================== */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="font-semibold tracking-wide text-secondary uppercase">
                About Mamta
              </p>

              <h1 className="mt-3 text-4xl leading-tight font-bold md:text-5xl">
                Working With Communities{" "}
                <span className="text-primary">For A Better Tomorrow</span>
              </h1>

              <p className="mt-6 leading-8 text-muted-foreground">
                Mamta Samajik Sanstha is a community-focused organization
                working to create meaningful and lasting change in the lives of
                people who need support and opportunity.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                Since 2010, our work has been centered around understanding the
                needs of communities and working alongside them to find
                practical, sustainable solutions.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                We believe that development is strongest when communities
                participate in the process and have the confidence, resources
                and opportunities to shape their own future.
              </p>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl bg-secondary/20" />

              <div className="relative rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl md:p-10">
                <Heart className="h-10 w-10 text-secondary" />

                <h2 className="mt-6 text-3xl font-bold">People First</h2>

                <p className="mt-4 leading-7 opacity-90">
                  Our approach begins with people. We listen to communities,
                  understand their challenges and work together to build
                  solutions that can create long-term impact.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-primary-foreground/10 p-5">
                    <p className="text-3xl font-bold text-secondary">2010</p>

                    <p className="mt-1 text-sm opacity-90">Journey Began</p>
                  </div>

                  <div className="rounded-2xl bg-primary-foreground/10 p-5">
                    <Users className="h-7 w-7 text-secondary" />

                    <p className="mt-2 text-sm opacity-90">Community Driven</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. OUR JOURNEY
      ===================================================== */}
      <section className="bg-muted px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-14 text-center">
            <p className="font-semibold tracking-wide text-secondary uppercase">
              Our Journey
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Growing Through Community
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              Our journey has been shaped by the people and communities we work
              with.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-5 hidden w-0.5 bg-secondary/40 md:block" />

            <div className="space-y-10">
              {/* 2010 */}
              <div className="relative md:flex md:items-start md:gap-8">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                  01
                </div>

                <Card className="mt-4 border border-border bg-card shadow-sm md:mt-0">
                  <CardContent className="p-6">
                    <p className="font-bold text-secondary">2010</p>

                    <h3 className="mt-1 text-xl font-bold text-card-foreground">
                      The Beginning
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      Mamta began its journey with a commitment to work
                      alongside communities and address challenges affecting
                      everyday lives.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Growth */}
              <div className="relative md:flex md:items-start md:gap-8">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  02
                </div>

                <Card className="mt-4 border border-border bg-card shadow-sm md:mt-0">
                  <CardContent className="p-6">
                    <p className="font-bold text-primary">Growth</p>

                    <h3 className="mt-1 text-xl font-bold text-card-foreground">
                      Expanding Our Work
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      As our understanding of community needs grew, our work
                      expanded across areas including education, healthcare,
                      livelihoods, sanitation and women's empowerment.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Today */}
              <div className="relative md:flex md:items-start md:gap-8">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                  03
                </div>

                <Card className="mt-4 border border-border bg-card shadow-sm md:mt-0">
                  <CardContent className="p-6">
                    <p className="font-bold text-secondary">Today</p>

                    <h3 className="mt-1 text-xl font-bold text-card-foreground">
                      Building Sustainable Change
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      Today, Mamta continues to work with communities,
                      volunteers and partners to create solutions that encourage
                      dignity, independence and sustainable development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. WHY WE EXIST
      ===================================================== */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <p className="font-semibold tracking-wide text-secondary uppercase">
                Why We Exist
              </p>

              <h2 className="mt-3 text-3xl leading-tight font-bold md:text-4xl">
                Change Begins When{" "}
                <span className="text-primary">People Get An Opportunity</span>
              </h2>

              <p className="mt-6 leading-8 text-muted-foreground">
                Many communities continue to face challenges that limit access
                to education, healthcare, safe sanitation, livelihoods and equal
                opportunities.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                We exist because these challenges should not determine someone's
                future. We believe people deserve the opportunity to live with
                dignity, make informed choices and build a better future for
                themselves and their families.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                Our role is to support communities, strengthen their
                capabilities and help create pathways toward greater
                independence.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="border-border bg-secondary/10 shadow-sm">
                <CardContent className="p-6">
                  <Target className="h-9 w-9 text-secondary" />

                  <h3 className="mt-5 text-xl font-bold">Opportunity</h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    Creating access to opportunities that can improve people's
                    lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary/10 shadow-sm">
                <CardContent className="p-6">
                  <HandHeart className="h-9 w-9 text-primary" />

                  <h3 className="mt-5 text-xl font-bold">Dignity</h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    Ensuring people are treated with respect, equality and
                    dignity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary/10 shadow-sm">
                <CardContent className="p-6">
                  <Users className="h-9 w-9 text-primary" />

                  <h3 className="mt-5 text-xl font-bold">Participation</h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    Involving communities in decisions that affect their future.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-secondary/10 shadow-sm">
                <CardContent className="p-6">
                  <Leaf className="h-9 w-9 text-secondary" />

                  <h3 className="mt-5 text-xl font-bold">Sustainability</h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    Building solutions that can continue creating impact over
                    the long term.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          4. OUR VALUES
      ===================================================== */}
      <section className="bg-primary px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-semibold tracking-wide text-secondary uppercase">
              Our Values
            </p>

            <h2 className="mt-2 text-3xl font-bold text-primary-foreground md:text-4xl">
              What Guides Our Work
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-primary-foreground/80">
              Our values shape the way we work with communities, volunteers and
              partners.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {/* Compassion */}
            <Card className="border-primary-foreground/10 bg-primary-foreground/10 text-primary-foreground">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-secondary" />

                <h3 className="mt-5 font-bold">Compassion</h3>

                <p className="mt-3 text-sm leading-6 text-primary-foreground/80">
                  We listen, understand and respond with empathy.
                </p>
              </CardContent>
            </Card>

            {/* Equality */}
            <Card className="border-primary-foreground/10 bg-primary-foreground/10 text-primary-foreground">
              <CardContent className="p-6">
                <Scale className="h-8 w-8 text-secondary" />

                <h3 className="mt-5 font-bold">Equality</h3>

                <p className="mt-3 text-sm leading-6 text-primary-foreground/80">
                  We believe everyone deserves equal opportunity.
                </p>
              </CardContent>
            </Card>

            {/* Integrity */}
            <Card className="border-primary-foreground/10 bg-primary-foreground/10 text-primary-foreground">
              <CardContent className="p-6">
                <ShieldCheck className="h-8 w-8 text-secondary" />

                <h3 className="mt-5 font-bold">Integrity</h3>

                <p className="mt-3 text-sm leading-6 text-primary-foreground/80">
                  We value honesty, responsibility and transparency.
                </p>
              </CardContent>
            </Card>

            {/* Sustainability */}
            <Card className="border-primary-foreground/10 bg-primary-foreground/10 text-primary-foreground">
              <CardContent className="p-6">
                <Leaf className="h-8 w-8 text-secondary" />

                <h3 className="mt-5 font-bold">Sustainability</h3>

                <p className="mt-3 text-sm leading-6 text-primary-foreground/80">
                  We focus on solutions that create lasting change.
                </p>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="border-primary-foreground/10 bg-primary-foreground/10 text-primary-foreground">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-secondary" />

                <h3 className="mt-5 font-bold">Community</h3>

                <p className="mt-3 text-sm leading-6 text-primary-foreground/80">
                  We believe communities are partners in development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =====================================================
          5. OUR TEAM
      ===================================================== */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-semibold tracking-wide text-secondary uppercase">
              Our Team
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              People Behind The Work
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              Meaningful community work is possible because of people who
              dedicate their time, knowledge and energy to the cause.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Leadership */}
            <Card className="border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15">
                  <Users className="h-8 w-8 text-secondary" />
                </div>

                <h3 className="mt-6 text-xl font-bold">Leadership</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Our leadership team provides direction, accountability and a
                  long-term vision for the organization.
                </p>
              </CardContent>
            </Card>

            {/* Field Team */}
            <Card className="border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                  <HandHeart className="h-8 w-8 text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-bold">Field Team</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Our field teams work directly with communities, understand
                  local needs and help implement initiatives.
                </p>
              </CardContent>
            </Card>

            {/* Volunteers */}
            <Card className="border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>

                <h3 className="mt-6 text-xl font-bold">Volunteers</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Volunteers contribute their time, skills and compassion to
                  strengthen our work and reach more people.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =====================================================
          6. HOW WE WORK
      ===================================================== */}
      <section className="bg-muted px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-semibold tracking-wide text-secondary uppercase">
              Our Approach
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">How We Work</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {/* Listen */}
            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-6">
                <span className="text-4xl font-bold text-secondary/40">01</span>

                <h3 className="mt-4 text-xl font-bold">Listen</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  We begin by listening to communities and understanding their
                  real needs.
                </p>
              </CardContent>
            </Card>

            {/* Understand */}
            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-6">
                <span className="text-4xl font-bold text-primary/40">02</span>

                <h3 className="mt-4 text-xl font-bold">Understand</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  We study local challenges and identify practical ways to
                  address them.
                </p>
              </CardContent>
            </Card>

            {/* Collaborate */}
            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-6">
                <span className="text-4xl font-bold text-secondary/40">03</span>

                <h3 className="mt-4 text-xl font-bold">Collaborate</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  We work with communities, volunteers and partners to implement
                  solutions.
                </p>
              </CardContent>
            </Card>

            {/* Sustain */}
            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-6">
                <span className="text-4xl font-bold text-primary/40">04</span>

                <h3 className="mt-4 text-xl font-bold">Sustain</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  We focus on building capabilities that can continue creating
                  impact beyond individual projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =====================================================
          7. OUR COMMITMENT
      ===================================================== */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-secondary/10 p-8 text-center md:p-14">
            <HandHeart className="mx-auto h-12 w-12 text-secondary" />

            <p className="mt-6 font-semibold tracking-wide text-secondary uppercase">
              Our Commitment
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Creating Change With Respect, Responsibility & Hope
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-muted-foreground">
              We are committed to working with communities with respect,
              transparency and responsibility. Our goal is not simply to provide
              support, but to help create opportunities through which people can
              build stronger and more independent futures.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          8. JOIN OUR JOURNEY
      ===================================================== */}
      <section className="bg-primary px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold tracking-wide text-secondary uppercase">
            Be A Part Of The Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold text-primary-foreground md:text-4xl">
            Together, We Can Create{" "}
            <span className="text-secondary">Meaningful Change</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-primary-foreground/80">
            Whether through volunteering, partnerships, contributions or simply
            spreading awareness, every effort can help strengthen communities
            and create new possibilities.
          </p>

          <Button className="mt-8 rounded-full bg-secondary px-7 py-6 text-base font-semibold text-secondary-foreground hover:bg-secondary/90">
            Get Involved
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
