import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"

import techMahindra from "@/assets/partners/tech-mahindra.png"
import skillsonics from "@/assets/partners/skillsonics.png"
import unionBank from "@/assets/partners/union-bank.png"
import bob from "@/assets/partners/bob.png"
import johnson from "@/assets/partners/johnson.png"
import bisleri from "@/assets/partners/bisleri.png"

const partners = [
  {
    name: "Tech Mahindra",
    logo: techMahindra,
  },
  {
    name: "SkillSonics",
    logo: skillsonics,
  },
  {
    name: "Union Bank",
    logo: unionBank,
  },
  {
    name: "Bank of Baroda",
    logo: bob,
  },
  {
    name: "Johnson & Johnson",
    logo: johnson,
  },
  {
    name: "Bisleri",
    logo: bisleri,
  },
]

function Partners() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">
          Our <span className="text-secondary">Partners</span>
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}
        >
          <CarouselContent>
            {partners.map((partner) => (
              <CarouselItem
                key={partner.name}
                className="basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <Card>
                  <CardContent className="flex h-20 items-center justify-center p-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export default Partners
