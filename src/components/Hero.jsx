import { Button } from "react-aria-components";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-[#E9744C] via-[#EFA297] to-[#327BA8] relative overflow-hidden">
      {/* Decorative circles - mejorados para responsive */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white" />
        <div className="absolute top-24 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white" />
        <div className="absolute bottom-16 left-8 sm:left-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white" />
        <div className="absolute bottom-24 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white" />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text content - ordenado primero para mobile */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 w-full lg:w-1/2">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.5rem] leading-tight text-white">
                Viví la experiencia de viajar sin complicaciones
              </h1>
              <p className="max-w-[600px] text-white/90 text-base sm:text-lg md:text-xl">
                Armá tu propio viaje con nuestros servicios completos de{" "}
                <span className="font-semibold">visas, trámites y seguros</span>
                , como ya lo hicieron miles de viajeros.
              </p>
            </div>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Button
                className="bg-white text-[#E9744C] hover:bg-white/90 rounded-md px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-colors"
                aria-label="Comenzar viaje"
              >
                Comenzá tu viaje
              </Button>
              <Button
                className="border-2 border-white text-white hover:bg-white hover:text-[#E9744C] rounded-md px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-colors"
                aria-label="Ver destinos"
              >
                Ver Destinos
              </Button>
            </div>
          </div>

          {/* Image - ordenado después para mobile */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video w-full max-w-[600px] mx-auto lg:mx-0">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Experiencia de viaje"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
