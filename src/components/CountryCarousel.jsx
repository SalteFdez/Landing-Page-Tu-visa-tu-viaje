import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { countries } from "./countries.js";

export default function CountryCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [perSlide, setPerSlide] = useState(6);
  const carouselTrackRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const gapPx = 16;

  const totalCountries = countries.length;
  const numSlides = Math.ceil(totalCountries / perSlide);
  const extendedCountries = [...countries, ...countries.slice(0, perSlide)];

  useEffect(() => {
    const updatePerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) setPerSlide(2);
      else if (width < 768) setPerSlide(3);
      else if (width < 1024) setPerSlide(4);
      else setPerSlide(6);
    };

    updatePerSlide();
    window.addEventListener("resize", updatePerSlide);
    return () => window.removeEventListener("resize", updatePerSlide);
  }, []);

  useEffect(() => {
    if (carouselTrackRef.current) {
      const carouselVisibleWidth =
        carouselTrackRef.current.parentElement.offsetWidth;
      const calculatedItemWidth =
        (carouselVisibleWidth - (perSlide - 1) * gapPx) / perSlide;
      setItemWidth(calculatedItemWidth);
    }
  }, [perSlide, currentSlideIndex]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlideIndex >= numSlides) {
      setIsTransitioning(true);
      carouselTrackRef.current.style.transition = "none";
      setCurrentSlideIndex(0);
      setTimeout(() => {
        carouselTrackRef.current.offsetHeight;
        carouselTrackRef.current.style.transition = "";
        setIsTransitioning(false);
      }, 20);
    }
  };

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlideIndex((prev) => (prev === 0 ? numSlides : prev - 1));
    }
  };

  const displayOffset = -(currentSlideIndex * (itemWidth + gapPx) * perSlide);

  return (
    <section
      id="destinos"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-gray-900">
            Conocé todos los destinos disponibles
          </h2>
          <p className="text-lg text-gray-600">
            Más de {totalCountries} países esperándote
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={carouselTrackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${displayOffset}px)`,
              width: `${extendedCountries.length * (itemWidth + gapPx)}px`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCountries.map((c, index) => (
              <div
                key={`${c.name}-${index}`}
                className="border bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                style={{
                  width: `${itemWidth}px`,
                  marginRight:
                    index < extendedCountries.length - 1 ? `${gapPx}px` : "0px",
                  flexShrink: 0,
                }}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">{c.flag}</span>
                    <span className="font-medium text-sm">{c.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalCountries > perSlide && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
