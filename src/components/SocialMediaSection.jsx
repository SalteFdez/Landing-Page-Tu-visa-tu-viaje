import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
} from "lucide-react";

const socials = [
  { href: "#", label: "Facebook", bg: "bg-[#1877F2]", Icon: Facebook },
  {
    href: "https://www.instagram.com/tuvisa.tuviaje?igsh=dGJzYnNwazRpdTc5",
    label: "Instagram",
    bg: "bg-gradient-to-r from-[#E4405F] to-[#5B51D8]",
    Icon: Instagram,
  },
  {
    href: "https://wa.me/5493875105738?text=Hola, Quiero Asistencia para mi visa Working Holiday!",
    label: "WhatsApp",
    bg: "bg-[#25D366]",
    Icon: MessageCircle,
  },
];

export default function SocialMediaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2F2F2F]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Seguinos en nuestras redes
            </h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Mantente al día con consejos de viaje, historias de viajeros y las
              últimas novedades
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {socials.map(({ href, label, bg, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                className={`flex items-center gap-3 ${bg} hover:opacity-90 text-white px-6 py-3 rounded-lg transition-all`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{label}</span>
              </a>
            ))}
          </div>

          {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E9744C]">15K+</div>
              <div className="text-sm text-gray-400">Seguidores</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E9744C]">500+</div>
              <div className="text-sm text-gray-400">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E9744C]">1M+</div>
              <div className="text-sm text-gray-400">Visualizaciones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E9744C]">24/7</div>
              <div className="text-sm text-gray-400">Activos</div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
