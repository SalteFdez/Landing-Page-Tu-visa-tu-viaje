import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            width="48"
            height="48"
            alt="Tu Visa, Tu Viaje"
            className="rounded-full"
          />
          <span className="font-bold">Tu Visa, Tu Viaje</span>
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Tu Visa, Tu Viaje. Todos los derechos
          reservados.
        </p>
        <nav className="flex gap-4 sm:gap-6 text-xs text-gray-400">
          <a href="#" className="hover:text-blue-400">
            Términos de Servicio
          </a>
          <a href="#" className="hover:text-blue-400">
            Privacidad
          </a>
          <a href="#" className="hover:text-blue-400">
            Cookies
          </a>
        </nav>
      </div>
    </footer>
  );
}
