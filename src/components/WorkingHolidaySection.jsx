import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Calendar,
  Users,
  Briefcase,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function WorkingHolidaySection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-light-coral px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            ¿Qué es una visa Working Holiday?
          </h1>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md">
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue/20 to-primary/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl">🌍✈️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">
                Anímate a viajar y trabajar en el exterior
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Las visas working holiday son un tipo de visa que te permite
                viajar a un destino con el fin de trabajar y recorrer el país
                durante 1 año. Vas a poder ahorrar dinero, conocer gente de todo
                el mundo, viajar mucho, y lo mejor de todo, podés armar todo el
                viaje de manera independiente.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-light-coral to-cream rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">🎒🌟</div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-forest-green text-white p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Características */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8">
              Las características más importantes que debes saber
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8 text-blue" />,
                  title: "Rango de Edad",
                  desc: "Entre 18 y 35 años de edad. Esto depende del destino",
                  badges: ["18", "35"],
                  badgeColor: "blue",
                },
                {
                  icon: <Calendar className="w-8 h-8 text-primary" />,
                  title: "Duración de la visa",
                  desc: "El máximo de tiempo es 1 año, pero puedes hacerlo por menos tiempo también",
                },
                {
                  icon: <Globe className="w-8 h-8 text-forest-green" />,
                  title: "Lo más importante es el pasaporte",
                  desc: "No importa dónde vivas, para conseguir la visa importa qué pasaporte tenés",
                },
                {
                  icon: <Briefcase className="w-8 h-8 text-brown" />,
                  title: "¿Qué trabajo puedo realizar?",
                  desc: "Puedes buscar trabajos de lo que quieras! Como profesional, en un bar, en el campo, etc.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-light-coral" />,
                  title: "¡Lo gestionas sin intermediarios!",
                  desc: "Todos los trámites de la visa los puedes realizar online solo, sin agencias que te cobren de más",
                },
                {
                  icon: <MapPin className="w-8 h-8 text-primary" />,
                  title: "Una vez por destino",
                  desc: "Puedes obtenerla 1 vez por destino, no se puede repetir al mismo país!",
                },
              ].map((card, i) => (
                <Card key={i} className="border-none shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-4 rounded-full bg-opacity-10 bg-current">
                        {card.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-dark-gray mb-2">
                      {card.title}
                    </h4>
                    <p className="text-gray-600">{card.desc}</p>
                    {card.badges && (
                      <div className="mt-4 flex space-x-2">
                        {card.badges.map((b, j) => (
                          <Badge
                            key={j}
                            className={`bg-${card.badgeColor} text-white`}
                          >
                            {b}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Beneficios */}
          <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 md:p-12 border border-cream">
            <h3 className="text-3xl font-bold text-dark-gray text-center mb-12">
              Beneficios
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Sin agencias de por medio",
                "Ahorro de hasta USD 1500 por mes",
                "Visas fáciles de obtener",
                "Algunas visas se pueden extender por más de 1 año. Por ej NZ y AUS",
                "Destinos con excelente calidad de vida",
                "Posibilidad de ejercer tu profesión o probar nuevos trabajos",
                "Aprender un nuevo idioma",
                "Buen punto de partida para quedarte a vivir en otro país",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="bg-forest-green rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-dark-gray">{benefit}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-dark-gray mb-4">
              ¿Listo para comenzar tu aventura Working Holiday?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubre todos los destinos disponibles y comienza a planificar tu
              experiencia de vida única trabajando y viajando por el mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Ver Destinos Disponibles
              </Button>
              <Button
                variant="outline"
                className="border-forest-green text-forest-green hover:bg-forest-green/5 px-8 py-3 bg-transparent"
              >
                Consulta Personalizada
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
