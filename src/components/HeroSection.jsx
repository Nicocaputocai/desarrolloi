import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-crema relative overflow-hidden pt-20 pb-24 lg:pt-24 lg:pb-32 px-6 lg:px-8 min-h-[85vh] flex items-center">
      {/* Geometría de fondo */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 rounded-full border-[2px] border-azul-noche/10"></div>
        <div className="absolute top-40 -right-10 w-72 h-72 rounded-full border-[2px] border-terracota/10"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full border-[40px] border-verde-monte/5"></div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 w-full items-center">
        {/* TEXTO PRINCIPAL */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-verde-monte/10 border border-verde-monte/20 mb-6 lg:mb-8 w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-verde-monte animate-pulse"></span>
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-verde-monte">
              Políticas Públicas y Sostenibilidad
            </span>
          </div>

          <h1 className="font-sans font-extrabold text-azul-noche leading-[1.05] tracking-tight mb-6 lg:mb-8 text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] max-w-2xl">
            El puente entre el conocimiento y el{" "}
            <br className="hidden xl:block" />
            <span className="relative inline-block mt-2">
              <span className="text-verde-monte">territorio.</span>
              <svg
                className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-terracota"
                viewBox="0 0 400 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q200,20 400,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* BAJADA CORREGIDA Y MODERNIZADA (Sans-serif, sin cursiva, mejor contraste) */}
          <p className="font-sans text-lg md:text-xl text-azul-noche/90 leading-relaxed max-w-xl font-medium">
            Conectamos el análisis y la investigación con las necesidades de las
            comunidades. Desde la sociedad civil, diseñamos y aplicamos políticas públicas con impacto en el territorio.
          </p>
        </div>

        {/* IMAGEN 3D/MAQUETA */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[650px] z-10 flex justify-center items-center">
            {/* Opcional: Círculo sutil decorativo detrás de la imagen estilo Carbon Direct */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-72 h-72 bg-terracota/5 rounded-full -z-10 blur-xl"></div>

            <img
              src="/hero3.png" // Asegurate de que acá esté la ruta de tu nueva imagen
              alt="Maqueta de conocimiento y territorio"
              /* Si la imagen que conseguiste tiene fondo crema liso, dejá el mix-blend-multiply. Si es PNG transparente, podés sacarlo. */
              className="w-full h-auto object-contain mix-blend-multiply transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
