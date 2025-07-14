import { useState } from "react";

export default function CTASection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xovwrkaq", {
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
    <section className="w-full py-12 bg-[#E9744C]">
      <div className="container max-w-md mx-auto text-center px-4">
        {isSubmitted ? (
          <p className="text-white text-lg">
            ¡Gracias! Te contactaremos pronto.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center"
            noValidate
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Tu email"
              className="w-full rounded-md px-3 py-2 text-sm"
            />
            <input
              type="hidden"
              name="_subject"
              value="Solicitud de contacto desde el sitio web"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-[#E9744C] rounded-md px-4 py-2 text-sm font-medium"
            >
              {isLoading ? "Enviando..." : "Comenzar"}
            </button>
          </form>
        )}
        <p className="text-xs text-white/70 mt-2">
          Te contactaremos en menos de 24 horas
        </p>
      </div>
    </section>
  );
}
