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
  Plane,
  DollarSign,
  ArrowRight,
  Play,
  BookOpen,
  Code,
  ChefHat,
  GraduationCap,
  TreePine,
  Building2,
  Factory,
  Store,
  Hotel,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef } from "react";

const whatsappUrl = "https://wa.me/5493875105738?text=Hola, Quiero Asistencia para mi visa Working Holiday!";

export default function WorkingHolidaySection() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const benefitsRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Esperar a que GSAP esté disponible
    const initAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        // Hero section animation
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );

        // Floating animation for hero elements
        const floatingIcon = heroRef.current?.querySelector(".floating-icon");
        if (floatingIcon) {
          gsap.to(floatingIcon, {
            y: -15,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
          });
        }

        // Cards stagger animation
        const cards = cardsRef.current?.children;
        if (cards && cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 30, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Benefits section animation
        const benefits = benefitsRef.current?.children;
        if (benefits && benefits.length > 0) {
          gsap.fromTo(
            benefits,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: benefitsRef.current,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Stats counter animation
        const statsElements = statsRef.current?.children;
        if (statsElements && statsElements.length > 0) {
          gsap.fromTo(
            statsElements,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.15,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // CTA section animation
        if (ctaRef.current) {
          gsap.fromTo(
            ctaRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ctaRef.current,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Parallax effect for background elements (solo en desktop)
        if (window.innerWidth > 768) {
          gsap.to(".parallax-bg", {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        // Hover animations for cards (solo en desktop)
        if (window.innerWidth > 768) {
          const cards = cardsRef.current?.children;
          if (cards) {
            cards.forEach((card) => {
              card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                  scale: 1.03,
                  y: -5,
                  duration: 0.3,
                  ease: "power2.out",
                });
              });

              card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                  scale: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              });
            });
          }
        }
      }
    };

    // Intentar inicializar inmediatamente
    initAnimations();

    // Si GSAP no está disponible, esperar un poco y reintentar
    if (!window.gsap) {
      setTimeout(initAnimations, 100);
    }

    return () => {
      // Cleanup ScrollTrigger
      if (window.ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  const workingHolidayInfo = {
    title: "¿Qué es una Visa Working Holiday?",
    subtitle: "Tu puerta de entrada al mundo",
    description: "Una visa Working Holiday es tu billete de ida para vivir una experiencia única combinando trabajo y viaje en el extranjero. Es la oportunidad perfecta para explorar nuevos países mientras generas ingresos y desarrollas habilidades profesionales.",
    longDescription: "Las visas Working Holiday son acuerdos bilaterales entre países que permiten a jóvenes de 18 a 35 años (dependiendo del destino) vivir, trabajar y viajar en el país de destino por un período de hasta 12 meses. Es una experiencia que combina lo mejor de ambos mundos: la libertad de viajar y la oportunidad de generar ingresos para financiar tu aventura."
  };

  const keyFeatures = [
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />,
      title: "Rango de Edad",
      description: "Entre 18 y 35 años de edad, dependiendo del destino elegido",
      badges: ["18", "35"],
      badgeColor: "bg-blue-500",
      gradient: "from-blue-500/10 to-blue-600/10"
    },
    {
      icon: <Calendar className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
      title: "Duración Flexible",
      description: "Hasta 12 meses de estadía, con posibilidad de extensión en algunos países",
      badges: ["12 meses"],
      badgeColor: "bg-purple-500",
      gradient: "from-purple-500/10 to-purple-600/10"
    },
    {
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-green-500" />,
      title: "Pasaporte es la Clave",
      description: "Tu nacionalidad determina los destinos disponibles, no tu lugar de residencia",
      badges: ["Nacionalidad"],
      badgeColor: "bg-green-500",
      gradient: "from-green-500/10 to-green-600/10"
    },
    {
      icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
      title: "Trabajo Flexible",
      description: "Puedes trabajar en cualquier sector: desde tu profesión hasta trabajos temporales",
      badges: ["Flexible"],
      badgeColor: "bg-orange-500",
      gradient: "from-orange-500/10 to-orange-600/10"
    },
    {
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" />,
      title: "Sin Intermediarios",
      description: "Gestiona tu visa directamente online, sin agencias costosas",
      badges: ["Directo"],
      badgeColor: "bg-emerald-500",
      gradient: "from-emerald-500/10 to-emerald-600/10"
    },
    {
      icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-red-500" />,
      title: "Una Oportunidad Única",
      description: "Solo puedes obtener esta visa una vez por país de destino",
      badges: ["Única"],
      badgeColor: "bg-red-500",
      gradient: "from-red-500/10 to-red-600/10"
    }
  ];

  const benefits = [
    "Sin agencias intermediarias costosas",
    "Ahorro potencial de USD 1,500 por mes",
    "Proceso de visa simplificado y online",
    "Posibilidad de extensión en países como Nueva Zelanda y Australia",
    "Destinos con excelente calidad de vida y seguridad",
    "Oportunidad de ejercer tu profesión o explorar nuevos campos",
    "Inmersión total en el idioma local",
    "Puerta de entrada para residencia permanente",
    "Experiencia laboral internacional valorada",
    "Red de contactos globales",
    "Desarrollo de habilidades interculturales",
    "Memorias y experiencias únicas para toda la vida"
  ];

  const popularDestinations = [
    { name: "Australia", flag: "🇦🇺", popularity: "Muy Popular", requirements: "18-30 años" },
    { name: "Nueva Zelanda", flag: "🇳🇿", popularity: "Muy Popular", requirements: "18-30 años" },
    { name: "Canadá", flag: "🇨🇦", popularity: "Popular", requirements: "18-35 años" },
    { name: "Alemania", flag: "🇩🇪", popularity: "Emergente", requirements: "18-30 años" },
    { name: "Japón", flag: "🇯🇵", popularity: "Emergente", requirements: "18-30 años" },
    { name: "Corea del Sur", flag: "🇰🇷", popularity: "Nuevo", requirements: "18-30 años" }
  ];

  const stats = [
    { number: "50+", label: "Destinos Disponibles", icon: <Globe className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: "12", label: "Meses de Duración", icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: "1,500", label: "USD Ahorro Mensual", icon: <DollarSign className="w-5 h-5 md:w-6 md:h-6" /> },
    { number: "95%", label: "Tasa de Aprobación", icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute top-40 right-20 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl md:blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl md:blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-cream via-orange-50 to-light-coral px-4 py-12 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-6 md:mb-8">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium mb-4 md:mb-6">
              🌍 Experiencia Internacional
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              {workingHolidayInfo.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed">
              {workingHolidayInfo.subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              {workingHolidayInfo.description}
            </p>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl md:shadow-2xl border border-white/20">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center floating-icon">
                    <div className="text-6xl md:text-8xl animate-pulse">🌍✈️</div>
                  </div>
                  {/* Floating elements around the main icon */}
                  <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Ver Destinos Disponibles
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm">
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Guía Completa
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm lg:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* What is Working Holiday */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
                Anímate a vivir la experiencia de tu vida
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-4 md:mb-6">
                {workingHolidayInfo.longDescription}
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 md:mt-1">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">Combina trabajo y viaje en un solo programa</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 md:mt-1">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">Desarrolla habilidades profesionales internacionales</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 md:mt-1">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600">Construye una red de contactos global</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl md:shadow-2xl">
                  <div className="text-7xl md:text-9xl">🎒🌟</div>
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg">
                  <Plane className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-16">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Características principales que debes conocer
              </h3>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                Conoce los aspectos más importantes de las visas Working Holiday
              </p>
            </div>
            <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg md:shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-xl md:hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                      <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.gradient}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center">
                      {feature.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 text-center mb-3 md:mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.badges && (
                      <div className="flex justify-center space-x-2">
                        {feature.badges.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} className={`${feature.badgeColor} text-white text-xs md:text-sm`}>
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-16">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Destinos más populares
              </h3>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre los países más solicitados para Working Holiday
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {popularDestinations.map((destination, index) => (
                <div key={index} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="text-3xl md:text-4xl">{destination.flag}</div>
                    <Badge className={`${
                      destination.popularity === "Muy Popular" ? "bg-red-500" :
                      destination.popularity === "Popular" ? "bg-orange-500" :
                      destination.popularity === "Emergente" ? "bg-blue-500" : "bg-green-500"
                    } text-white text-xs md:text-sm`}>
                      {destination.popularity}
                    </Badge>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{destination.name}</h4>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{destination.requirements}</p>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 text-sm md:text-base">
                    Ver Detalles
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-100 mb-12 md:mb-20">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Beneficios de una Working Holiday
            </h3>
            <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4 group">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2 md:p-3 mt-0.5 md:mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm md:text-base">
                      {benefit}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Opportunities */}
          <div className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-16">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Oportunidades laborales
              </h3>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                Desde tu profesión hasta trabajos temporales, las opciones son infinitas
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: <Code className="w-6 h-6 md:w-8 md:h-8" />, title: "Tecnología", color: "from-blue-500 to-cyan-500" },
                { icon: <ChefHat className="w-6 h-6 md:w-8 md:h-8" />, title: "Gastronomía", color: "from-orange-500 to-red-500" },
                { icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />, title: "Educación", color: "from-green-500 to-emerald-500" },
                { icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />, title: "Oficina", color: "from-purple-500 to-pink-500" },
                { icon: <TreePine className="w-6 h-6 md:w-8 md:h-8" />, title: "Agricultura", color: "from-green-600 to-green-700" },
                { icon: <Hotel className="w-6 h-6 md:w-8 md:h-8" />, title: "Turismo", color: "from-yellow-500 to-orange-500" },
                { icon: <Store className="w-6 h-6 md:w-8 md:h-8" />, title: "Retail", color: "from-indigo-500 to-purple-500" },
                { icon: <Factory className="w-6 h-6 md:w-8 md:h-8" />, title: "Manufactura", color: "from-gray-500 to-gray-600" }
              ].map((job, index) => (
                <div key={index} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center group">
                  <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-r ${job.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {job.icon}
                  </div>
                  <h4 className="text-sm md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {job.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className="text-center">
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                ¿Listo para comenzar tu aventura Working Holiday?
              </h3>
              <p className="text-base md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90">
                Descubre todos los destinos disponibles y comienza a planificar tu
                experiencia de vida única trabajando y viajando por el mundo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Globe className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Explorar Destinos
                </Button>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl md:rounded-2xl backdrop-blur-sm inline-flex items-center justify-center transition-all duration-300">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Consulta Gratuita
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
