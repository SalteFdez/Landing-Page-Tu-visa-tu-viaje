import { Button } from "react-aria-components";

export default function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E9744C]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              ¿Listo para tu próximo viaje?
            </h2>
            <p className="mx-auto max-w-[600px] text-white/90 md:text-xl">
              Déjanos encargarnos de todos los trámites mientras tú planificas
              la aventura
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-white rounded-md px-3 py-2 text-sm"
              />
              <Button
                type="submit"
                className="bg-white text-[#E9744C] rounded-md px-4 py-2 text-sm"
              >
                Comenzar
              </Button>
            </form>
            <p className="text-xs text-white/70">
              Te contactaremos en menos de 24 horas
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-white text-[#E9744C] rounded-md px-6 py-3 text-sm">
              Solicitar Cotización
            </Button>
            <Button className="border border-white text-white hover:bg-white hover:text-[#E9744C] rounded-md px-6 py-3 text-sm bg-transparent">
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
