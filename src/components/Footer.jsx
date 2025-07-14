export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 bg-gray-900 text-white border-t border-gray-800">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo y nombre */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              width="40"
              height="40"
              alt="Tu Visa, Tu Viaje"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
            />
            <span className="font-bold text-sm sm:text-base md:text-lg">
              Tu Visa, Tu Viaje
            </span>
          </div>

          {/* Enlaces de navegación - orden cambia según breakpoint */}
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Términos de Servicio
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Cookies
            </a>
          </nav>

          {/* Copyright - se mueve según breakpoint */}
          <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left order-first md:order-none mt-2 md:mt-0">
            © {new Date().getFullYear()} Tu Visa, Tu Viaje. Todos los derechos
            reservados.
          </p>
        </div>

        {/* Versión móvil alternativa */}
        <div className="mt-6 md:hidden flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Tu Visa, Tu Viaje
          </p>
          <p className="text-xxs text-gray-500">
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
