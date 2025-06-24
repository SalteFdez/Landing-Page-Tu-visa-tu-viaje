import { useState } from "react";
import { Button } from "react-aria-components";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container h-16 flex items-center justify-between relative">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            width="40"
            height="40"
            alt="Tu Visa, Tu Viaje"
            className="rounded-full"
          />
          <span className="ml-2 text-lg font-bold">Tu Visa, Tu Viaje</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <a
            href="#"
            className="text-sm font-medium hover:text-[#E9744C] transition-colors"
          >
            Que es Working Holiday?
          </a>
          <a
            href="#servicios"
            className="text-sm font-medium hover:text-[#E9744C] transition-colors"
          >
            Servicios
          </a>
          <a
            href="#destinos"
            className="text-sm font-medium hover:text-[#E9744C] transition-colors"
          >
            Destinos
          </a>
          <a
            href="#proceso"
            className="text-sm font-medium hover:text-[#E9744C] transition-colors"
          >
            Proceso
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium hover:text-[#E9744C] transition-colors"
          >
            Contacto
          </a>
          <a
            href="https://www.aseguratuviaje.com/afiliados/florentinabielecki"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-[#E9744C] hover:bg-[#E9744C]/90 text-white rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-sm inline-flex items-center justify-center transition-colors"
          >
            Seguro de Viaje
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Menú de navegación"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 mt-16 transition-all duration-300 ease-in-out transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6">
              <a
                href="#"
                className="text-lg font-medium hover:text-[#E9744C] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Que es Working Holiday?
              </a>
              <a
                href="#servicios"
                className="text-lg font-medium hover:text-[#E9744C] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#destinos"
                className="text-lg font-medium hover:text-[#E9744C] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Destinos
              </a>
              <a
                href="#proceso"
                className="text-lg font-medium hover:text-[#E9744C] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proceso
              </a>
              <a
                href="#contacto"
                className="text-lg font-medium hover:text-[#E9744C] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href="https://www.aseguratuviaje.com/afiliados/florentinabielecki"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full bg-[#E9744C] hover:bg-[#E9744C]/90 text-white rounded-md px-4 py-2 text-lg mt-4 inline-block text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E9744C] focus:ring-offset-2"
              >
                Seguro de Viaje
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
