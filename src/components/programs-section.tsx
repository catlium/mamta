import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "./ui/button";

const programs = [
  {
    image: "https://picsum.photos/400/300",
    title: "Education Support",
    description:
      "Providing quality education and learning resources to children in rural communities.",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "Healthcare",
    description:
      "Organizing medical camps and spreading health awareness for better living.",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "Women Empowerment",
    description:
      "Helping women become financially independent through skill development.",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "Education Support",
    description:
      "Providing quality education and learning resources to children in rural communities.",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "Healthcare",
    description:
      "Organizing medical camps and spreading health awareness for better living.",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "Women Empowerment",
    description:
      "Helping women become financially independent through skill development.",
  },
];

function ProgramsSection() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full p-12 mx-auto"
    >
      <CarouselContent>
        {programs.map((program) => (
          <CarouselItem key={program.title} className="basis-1/1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 my-2 items-start">
                  <img src={program.image} alt={program.title}></img>
                  {program.description}
                  <Button variant={'link'}>Learn More </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProgramsSection;