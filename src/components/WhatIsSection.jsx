import { Button } from "react-aria-components";

export default function WhatIsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#F9E9D8] to-[#EFA297]/30 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                ¿Qué es Tu Visa, Tu Viaje?
              </h2>
              <p className="text-lg text-gray-700">
                Aprendé cómo funcionan nuestros servicios que te permiten viajar
                sin preocupaciones por todo el mundo. Gestionamos visas,
                trámites administrativos y seguros para que solo te enfoques en
                disfrutar.
              </p>
            </div>
            <Button className="bg-[#E9744C] hover:bg-[#D4633B] text-white rounded-md px-6 py-3 text-sm font-medium transition-colors">
              ¡Quiero saber más!
            </Button>
          </div>
          <div className="relative">
            <img
              src="http://googleusercontent.com/image_generation_content/0"
              alt="Personas felices viajando"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
