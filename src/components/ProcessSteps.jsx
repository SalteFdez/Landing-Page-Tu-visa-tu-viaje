import { Globe, FileText, Shield, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Globe className="h-10 w-10 text-[#E9744C]" />,
    bg: "bg-[#F9E9D8]",
    title: "Elegí tu destino",
    desc: "Seleccioná el país que querés visitar",
  },
  {
    icon: <FileText className="h-10 w-10 text-[#3E915C]" />,
    bg: "bg-[#3E915C]/10",
    title: "Gestioná tu VISA",
    desc: "Nosotros nos encargamos de todos los trámites",
  },
  {
    icon: <Shield className="h-10 w-10 text-[#327BA8]" />,
    bg: "bg-[#327BA8]/10",
    title: "Contrató seguro y pasaje",
    desc: "Protección completa para tu viaje",
  },
  {
    icon: <Users className="h-10 w-10 text-[#B68F6A]" />,
    bg: "bg-[#B68F6A]/10",
    title: "Ingresá al mundo Tu Visa, Tu Viaje",
    desc: "Comunidad de viajeros y soporte 24/7",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-[#EFA297]" />,
    bg: "bg-[#EFA297]/20",
    title: "¡Comenzá tu viaje!",
    desc: "Todo listo para la aventura",
  },
];

export default function ProcessSteps() {
  return (
    <section id="proceso" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
            ¿Cómo armar tu experiencia de viaje perfecta?
          </h2>
          <p className="text-lg text-gray-600">Solo 5 pasos</p>
        </div>
        <div className="grid gap-8 md:grid-cols-5 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center ${step.bg}`}
              >
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
