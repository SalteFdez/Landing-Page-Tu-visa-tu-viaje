import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "react-aria-components";

const whatsappUrl = "https://wa.me/5493875105738?text=Hola, Quiero Asistencia para mi visa Working Holiday!";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mrbkjyjg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        const errorMsg =
          result?.errors?.map((err) => err.message).join(", ") ||
          "Ocurrió un error al enviar el formulario.";
        alert(errorMsg);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un problema al enviar el formulario.");
    } finally {
      setIsLoading(false);
    }
  };

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
                  <div className="text-gray-600">+54 387 5105738</div>
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
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                    +54 387 5105738
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow p-6 space-y-4">
            {isSubmitted ? (
              <p className="text-green-600 font-medium text-center">
                ¡Gracias por tu consulta! Te responderemos pronto.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      name="nombre"
                      id="nombre"
                      required
                      placeholder="Tu nombre"
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="apellido">
                      Apellido
                    </label>
                    <input
                      name="apellido"
                      id="apellido"
                      required
                      placeholder="Tu apellido"
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="telefono">
                    Teléfono
                  </label>
                  <input
                    name="telefono"
                    id="telefono"
                    required
                    placeholder="+1 (555) 123-4567"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="destino">
                    Destino
                  </label>
                  <input
                    name="destino"
                    id="destino"
                    placeholder="¿A dónde viajas?"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="mensaje">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    id="mensaje"
                    className="w-full min-h-[100px] border rounded-md px-3 py-2 text-sm"
                    placeholder="Cuéntanos qué servicios necesitas..."
                  />
                </div>

                {/* Asunto oculto */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Nueva consulta desde el sitio web"
                />

                <Button
                  type="submit"
                  className="w-full bg-[#E9744C] hover:bg-[#E9744C]/90 text-white rounded-md px-4 py-2 text-sm"
                  isDisabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar Solicitud"}
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">O</span>
                  </div>
                </div>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 text-sm flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  Consultar por WhatsApp
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
