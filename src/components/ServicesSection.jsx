import { FileText, Globe, Shield, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Gestion de Turnos",
    desc: "Gestionamos tus citas en consulados y embajadas",
    //price: "Desde $50 USD",
    badgeColor: "bg-[#F9E9D8] text-[#E9744C]",
    iconBg: "bg-[#F9E9D8]",
    Icon: <FileText className="h-6 w-6 text-[#E9744C]" />,
    bullets: [
      "Citas en todos los consulados",
      "Seguimiento en tiempo real",
      "Asesoría personalizada",
    ],
  },
  {
    title: "Asesoria con requisitos para la Visa",
    desc: "Completamos toda tu documentación oficial",
    //price: "Desde $75 USD",
    badgeColor: "bg-[#3E915C]/10 text-[#3E915C]",
    iconBg: "bg-[#3E915C]/10",
    Icon: <Globe className="h-6 w-6 text-[#3E915C]" />,
    bullets: [
      "Formularios consulares",
      "Apostillas y legalizaciones",
      "Traducciones oficiales",
    ],
  },
  {
    title: "Asistencia de Viaje",
    desc: "Protección completa para tu tranquilidad",
    //price: "Desde $25 USD",
    badgeColor: "bg-[#327BA8]/10 text-[#327BA8]",
    iconBg: "bg-[#327BA8]/10",
    Icon: <Shield className="h-6 w-6 text-[#327BA8]" />,
    bullets: [
      "Cobertura médica internacional",
      "Cancelación de viaje",
      "Asistencia 24/7",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl">
            Todo lo que necesitás para tu viaje en un solo lugar
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative overflow-hidden border-2 hover:border-[#EFA297] transition-colors rounded-lg bg-white"
            >
              <div className="p-6 space-y-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${s.iconBg}`}
                >
                  {s.Icon}
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {s.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {b}
                    </li>
                  ))}
                </ul>
                {/*
                <span
                  className={`inline-block px-2 py-1 rounded ${s.badgeColor}`}
                >
                  {s.price}
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
