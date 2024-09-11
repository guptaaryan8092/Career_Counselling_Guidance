import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      slideInterval={5000} // Adjust the interval for slide transition if needed
    >
      <img
        src="/assets/img/s1.jpg"  // Update this path to your local image
        alt="Slide 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/assets/img/s2.jpg"  // Update this path to your local image
        alt="Slide 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/assets/img/s3.jpg"  // Update this path to your local image
        alt="Slide 3"
        className="h-full w-full object-cover"
      />
      <img
        src="/assets/img/s3.jpg"  // Update this path to your local image
        alt="Slide 4"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
