import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { countries } from "./countries.js";

export default function CountryCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [perSlide, setPerSlide] = useState(6);
  const carouselTrackRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const gapPx = 8; // Reducido el gap para móviles

  const totalCountries = countries.length;
  const numSlides = Math.ceil(totalCountries / perSlide);
  const extendedCountries = [...countries, ...countries.slice(0, perSlide)];

  useEffect(() => {
    const updatePerSlide = () => {
      const width = window.innerWidth;
      if (width < 480) setPerSlide(3); // Móviles muy pequeños: 3 países
      else if (width < 640) setPerSlide(4); // Móviles pequeños: 4 países
      else if (width < 768) setPerSlide(5); // Móviles medianos: 5 países
      else if (width < 1024) setPerSlide(6); // Tablets: 6 países
      else if (width < 1280) setPerSlide(7); // Desktop pequeño: 7 países
      else setPerSlide(8); // Desktop grande: 8 países
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

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlideIndex(index);
    }
  };

  const displayOffset = -(currentSlideIndex * (itemWidth + gapPx) * perSlide);

  return (
    <section
      id="destinos"
      className="w-full py-6 md:py-8 lg:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex flex-col items-center text-center mb-6 md:mb-8 space-y-3 md:space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
            Conocé todos los destinos disponibles
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white/50 backdrop-blur-sm p-1 md:p-2 shadow-md">
          <div
            ref={carouselTrackRef}
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(${displayOffset}px)`,
              width: `${extendedCountries.length * (itemWidth + gapPx)}px`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCountries.map((c, index) => (
              <div
                key={`${c.name}-${index}`}
                className="group relative overflow-hidden rounded-md bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                style={{
                  width: `${itemWidth}px`,
                  marginRight:
                    index < extendedCountries.length - 1 ? `${gapPx}px` : "0px",
                  flexShrink: 0,
                }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-1 md:p-2 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-sm md:text-lg drop-shadow-sm">{c.flag}</span>
                    <span className="font-medium text-xs md:text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                      {c.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalCountries > perSlide && (
            <>
              <button
                onClick={prev}
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-sm p-1 md:p-1.5 rounded-full hover:bg-white hover:shadow-md transition-all duration-300 z-10 group"
              >
                <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={next}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-sm p-1 md:p-1.5 rounded-full hover:bg-white hover:shadow-md transition-all duration-300 z-10 group"
              >
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </button>
            </>
          )}
        </div>

        {/* Indicadores de navegación */}
        {totalCountries > perSlide && numSlides > 1 && (
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {Array.from({ length: numSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlideIndex === i
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Información adicional */}
        <div className="text-center mt-6 md:mt-8">
          <p className="text-sm md:text-base text-gray-600 mb-4">
            Más de <span className="font-semibold text-blue-600">{totalCountries} destinos</span> disponibles para tu Working Holiday
          </p>
        </div>
      </div>
    </section>
  );
}
