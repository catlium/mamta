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
    <main className="bg-white">
      {/* =====================================================
          1. ABOUT MAMTA
      ===================================================== */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="font-semibold tracking-wide text-orange-500 uppercase">
                About Mamta
              </p>

              <h1 className="mt-3 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
                Working With Communities
                <span className="text-blue-600"> For A Better Tomorrow</span>
              </h1>

              <p className="mt-6 leading-8 text-gray-600">
                Mamta Samajik Sanstha is a community-focused organization
                working to create meaningful and lasting change in the lives of
                people who need support and opportunity.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Since 2010, our work has been centered around understanding the
                needs of communities and working alongside them to find
                practical, sustainable solutions.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We believe that development is strongest when communities
                participate in the process and have the confidence, resources
                and opportunities to shape their own future.
              </p>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl bg-orange-100" />

              <div className="relative rounded-3xl bg-blue-900 p-8 text-white shadow-xl md:p-10">
                <Heart className="h-10 w-10 text-orange-400" />

                <h2 className="mt-6 text-3xl font-bold">People First</h2>

                <p className="mt-4 leading-7 text-blue-100">
                  Our approach begins with people. We listen to communities,
                  understand their challenges and work together to build
                  solutions that can create long-term impact.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-3xl font-bold text-orange-400">2010</p>
                    <p className="mt-1 text-sm text-blue-100">Journey Began</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <Users className="h-7 w-7 text-orange-400" />
                    <p className="mt-2 text-sm text-blue-100">
                      Community Driven
                    </p>
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
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="font-semibold tracking-wide text-orange-500 uppercase">
              Our Journey
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Growing Through Community
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Our journey has been shaped by the people and communities we work
              with.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 left-5 hidden h-full w-0.5 bg-orange-200 md:block" />

            <div className="space-y-10">
              {/* 2010 */}
              <div className="relative md:flex md:items-start md:gap-8">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  01
                </div>

                <Card className="mt-4 border-0 shadow-sm md:mt-0">
                  <CardContent className="p-6">
                    <p className="font-bold text-orange-500">2010</p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      The Beginning
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      Mamta began its journey with a commitment to work
                      alongside communities and address challenges affecting
                      everyday lives.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Growth */}
              <div className="relative md:flex md:items-start md:gap-8">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  02
                </div>

                <Card className="mt-4 border-0 shadow-sm md:mt-0">
                  <CardContent className="p-6">
                    <p className="font-bold text-blue-600">Growth</p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      Expanding Our Work
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      As our understanding of community needs grew, our work
                      expanded across areas including education, healthcare,
                      livelihoods, sanitation and women's empowerment.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Today */}
              <div className="relative md:flex md:items-start md:gap-8">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  03
                </div>

                <Card className="mt-4 border-0 shadow-sm md:mt-0">
                  <CardContent className="p-6">
                    <p className="font-bold text-orange-500">Today</p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      Building Sustainable Change
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
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
            <div>
              <p className="font-semibold tracking-wide text-orange-500 uppercase">
                Why We Exist
              </p>

              <h2 className="mt-3 text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
                Change Begins When
                <span className="text-blue-600">
                  {" "}
                  People Get An Opportunity
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Many communities continue to face challenges that limit access
                to education, healthcare, safe sanitation, livelihoods and equal
                opportunities.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We exist because these challenges should not determine someone's
                future. We believe people deserve the opportunity to live with
                dignity, make informed choices and build a better future for
                themselves and their families.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Our role is to support communities, strengthen their
                capabilities and help create pathways toward greater
                independence.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="border-0 bg-orange-50 shadow-sm">
                <CardContent className="p-6">
                  <Target className="h-9 w-9 text-orange-500" />

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    Opportunity
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Creating access to opportunities that can improve people's
                    lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-blue-50 shadow-sm">
                <CardContent className="p-6">
                  <HandHeart className="h-9 w-9 text-blue-600" />

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    Dignity
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Ensuring people are treated with respect, equality and
                    dignity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-blue-50 shadow-sm">
                <CardContent className="p-6">
                  <Users className="h-9 w-9 text-blue-600" />

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    Participation
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Involving communities in decisions that affect their future.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-orange-50 shadow-sm">
                <CardContent className="p-6">
                  <Leaf className="h-9 w-9 text-orange-500" />

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    Sustainability
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
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
      <section className="bg-blue-900 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-semibold tracking-wide text-orange-400 uppercase">
              Our Values
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              What Guides Our Work
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Our values shape the way we work with communities, volunteers and
              partners.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <Card className="border-0 bg-white/10 text-white">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-orange-400" />
                <h3 className="mt-5 font-bold">Compassion</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">
                  We listen, understand and respond with empathy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 text-white">
              <CardContent className="p-6">
                <Scale className="h-8 w-8 text-orange-400" />
                <h3 className="mt-5 font-bold">Equality</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">
                  We believe everyone deserves equal opportunity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 text-white">
              <CardContent className="p-6">
                <ShieldCheck className="h-8 w-8 text-orange-400" />
                <h3 className="mt-5 font-bold">Integrity</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">
                  We value honesty, responsibility and transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 text-white">
              <CardContent className="p-6">
                <Leaf className="h-8 w-8 text-orange-400" />
                <h3 className="mt-5 font-bold">Sustainability</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">
                  We focus on solutions that create lasting change.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 text-white">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-orange-400" />
                <h3 className="mt-5 font-bold">Community</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">
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
            <p className="font-semibold tracking-wide text-orange-500 uppercase">
              Our Team
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              People Behind The Work
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Meaningful community work is possible because of people who
              dedicate their time, knowledge and energy to the cause.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-0 bg-gray-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Leadership
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Our leadership team provides direction, accountability and a
                  long-term vision for the organization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <HandHeart className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Field Team
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Our field teams work directly with communities, understand
                  local needs and help implement initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Heart className="h-8 w-8 text-orange-500" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Volunteers
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
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
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-semibold tracking-wide text-orange-500 uppercase">
              Our Approach
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              How We Work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <span className="text-4xl font-bold text-orange-200">01</span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">Listen</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We begin by listening to communities and understanding their
                  real needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <span className="text-4xl font-bold text-blue-200">02</span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Understand
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We study local challenges and identify practical ways to
                  address them.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <span className="text-4xl font-bold text-orange-200">03</span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Collaborate
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We work with communities, volunteers and partners to implement
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <span className="text-4xl font-bold text-blue-200">04</span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Sustain
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
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
          <div className="rounded-3xl bg-orange-50 p-8 text-center md:p-14">
            <HandHeart className="mx-auto h-12 w-12 text-orange-500" />

            <p className="mt-6 font-semibold tracking-wide text-orange-500 uppercase">
              Our Commitment
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Creating Change With Respect, Responsibility & Hope
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
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
      <section className="bg-blue-900 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold tracking-wide text-orange-400 uppercase">
            Be A Part Of The Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Together, We Can Create
            <span className="text-orange-400"> Meaningful Change</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Whether through volunteering, partnerships, contributions or simply
            spreading awareness, every effort can help strengthen communities
            and create new possibilities.
          </p>

          <Button className="mt-8 rounded-full bg-orange-500 px-7 py-6 text-base font-semibold text-white hover:bg-orange-600">
            Get Involved
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
