import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer ",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center pt-10 px-4 md:px-28">
    <div className="w-full max-w-xl mx-auto my-20" >
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {
          category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
              <Button>{cat}</Button>
            </CarouselItem>
          ))
          }
          <CarouselItem></CarouselItem>
        </CarouselContent>
<CarouselPrevious/>
<CarouselNext/>

      </Carousel>
    </div>
    </div>
  );
};

export default CategoryCarousel;
