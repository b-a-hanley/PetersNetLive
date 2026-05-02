import React, { useState, useRef, useEffect } from "react";

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const events = [
    {
      title: "Christmas Concert",
      date: "5th December 2025 5:30pm-7:30pm",
      location: "Main Church",
      desc: "Modern christmas concert performed with church band and the Jesuit dancers. Refreshments of mince pies and non-alcholic mulled wine.",
    },
    {
      title: "Sunday Service",
      date: "6th December 2025 5:30pm-7:30pm",
      location: "Main Church",
      desc: "2nd Week of advent before Christmas, where we find joy.",
    },
    {
      title: "Kids Christmas Party",
      date: "10th December 2025 5:30pm-7:30pm",
      location: "Main Church",
      desc: "Suitable for ages 14-18. It will have a christmas quiz and disco.",
    },
    {
      title: "Sunday Service",
      date: "12th December 2025 5:30pm-7:30pm",
      location: "Main Church",
      desc: "3rd week of advent, we look at peace and resolution in times of crisis.",
    },
    {
      title: "Christmas Carols",
      date: "13th December 2025 5:30pm-7:30pm",
      location: "Main Church",
      desc: "Traditional sung carol service with choir and brass band. Refreshments of mince pies and non-alcholic mulled wine.",
    },
    {
      title: "Christingle and nativity",
      date: "15th Dec 2025 5:30pm-7:30pm",
      location: "Main Church",
      desc: "Kids christingle and sunday school nativity. Photographs must not be taken during the service.",
    },
    {
      title: "Sunday Service",
      date: "18th December 2025 5:30pm-7:30pm",
      location: "Main Church",
      desc: "4th week of advent, we look at christ",
    },
    {
      title: "St Albuns Homes carols",
      date: "19th Dec 2025 12:30pm-2:30pm",
      location: "Camberwick St Albuns Homes",
      desc: "Singing traditional carols in the local old peoples homes. Participants to wear christmas jumpers.",
    },
    {
      title: "Village carols",
      date: "20th Dec 2025 12:30pm-2:30pm",
      location: "Camberwick Green Precinct",
      desc: "Singing traditional carols in the precinct. Participants to wear christmas jumpers.",
    },
  ];

  // chunk into groups of 3
  const slides = [];
  for (let i = 0; i < events.length; i += 3) {
    slides.push(events.slice(i, i + 3));
  }

  const totalSlides = slides.length;

  const updateCarousel = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;
    }
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener("resize", updateCarousel);
    return () => window.removeEventListener("resize", updateCarousel);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <div ref={carouselRef} className="flex transition-transform duration-500">
            {slides.map((group, i) => (
              <div key={i} className="flex-none w-[85%] grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl">
                {group.map((event, j) => (
                  <div key={j} className="bg-div-background p-4 rounded-xl shadow">
                    <p className="mt-2 text-2xl font-bold tracking-tight text-colour sm:text-2xl">
                      {event.title}
                    </p>
                    <p>
                      <i>{event.date}</i>
                    </p>
                    <p>
                      <i>{event.location}</i>
                    </p>
                    <p>{event.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-primary text-colour p-3 rounded-full shadow z-10"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-primary text-colour p-3 rounded-full shadow z-10"
        >
          ›
        </button>
      </div>
  );
}
