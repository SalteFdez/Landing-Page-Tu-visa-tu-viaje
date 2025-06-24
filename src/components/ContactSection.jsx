import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "react-aria-components";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              Contáctanos
            </h2>
            <p className="text-gray-600 md:text-lg">
              Estamos aquí para ayudarte con todos tus trámites de viaje
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Teléfono</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">info@tuvisa-tuviaje.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Oficina</div>
                  <div className="text-gray-600">Av. Principal 123, Ciudad</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Solicita una Consulta Gratuita
              </h3>
              <p className="text-gray-600">
                Cuéntanos sobre tu viaje y te ayudaremos con todos los trámites
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre</label>
                <input
                  placeholder="Tu nombre"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Apellido</label>
                <input
                  placeholder="Tu apellido"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Teléfono</label>
              <input
                placeholder="+1 (555) 123-4567"
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Destino</label>
              <input
                placeholder="¿A dónde viajas?"
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Mensaje</label>
              <textarea
                className="w-full min-h-[100px] border rounded-md px-3 py-2 text-sm"
                placeholder="Cuéntanos qué servicios necesitas..."
              />
            </div>
            <Button className="w-full bg-[#E9744C] hover:bg-[#E9744C]/90 text-white rounded-md px-4 py-2 text-sm">
              Enviar Solicitud
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
