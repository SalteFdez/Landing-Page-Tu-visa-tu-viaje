import { Button } from "react-aria-components";

export default function WhatIsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#F9E9D8] to-[#EFA297]/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#E9744C] text-4xl">
                ❓❓❓
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                ¿Qué es Tu Visa, Tu Viaje?
              </h2>
              <p className="text-lg text-gray-600">
                Aprendé cómo funcionan nuestros servicios que te permiten viajar
                sin preocupaciones por todo el mundo. Gestionamos visas,
                trámites administrativos y seguros para que solo te enfoques en
                disfrutar.
              </p>
            </div>
            <Button className="bg-[#E9744C] hover:bg-[#E9744C]/90 text-white rounded-md px-6 py-3 text-sm">
              ¡Quiero saber más!
            </Button>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              width="600"
              height="400"
              alt="Personas felices viajando"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Zigzag pattern bg */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="fill-[#E9744C]"
        >
          <pattern
            id="zigzag"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
          >
            <path d="M0,10 L10,0 L20,10 L10,20 Z" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#zigzag)" />
        </svg>
      </div>
    </section>
  );
}
