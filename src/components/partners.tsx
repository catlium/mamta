import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const partners = [
  {
    name: "Tech Mahindra",
    logo: "/partners/tech-mahindra.png",
  },
  {
    name: "SkillSonics",
    logo: "/partners/skillsonics.png",
  },
  {
    name: "Union Bank",
    logo: "/partners/union-bank.png",
  },
  {
    name: "Bank of Baroda",
    logo: "/partners/bob.png",
  },
  {
    name: "Johnson & Johnson",
    logo: "/partners/johnson.png",
  },
  {
    name: "HDFC Bank",
    logo: "/partners/hdfc.png",
  },
];

function Partners() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-orange-500">
          Our Partners
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
                <div className="flex h-20 items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain transition duration-300 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Partners;