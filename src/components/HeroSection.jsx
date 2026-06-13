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

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 w-full">
        {/* TEXTO PRINCIPAL */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-verde-monte/10 border border-verde-monte/20 mb-6 lg:mb-8 w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-verde-monte animate-pulse"></span>
            <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-verde-monte">
              Políticas Públicas y Sostenibilidad
            </span>
          </div>

          <h1 className="font-sans font-extrabold text-azul-noche leading-[1.05] tracking-tight mb-6 lg:mb-8 text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem] max-w-3xl">
            El puente entre el conocimiento y el{" "}
            <br className="hidden md:block" />
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

          {/* Bajada con el copy exacto de tu captura */}
          <p className="font-serif italic text-xl md:text-2xl text-azul-noche/80 leading-relaxed max-w-xl lg:max-w-2xl mb-10 lg:mb-12">
            No somos un think tank puro ni una ONG social pura: nuestro valor
            está en la articulación entre ambos mundos.
          </p>

        </div>

{/* FOTO VERTICAL (Diseño Editorial con Estructura Desplazada y Marco Fino) */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center justify-center lg:justify-end lg:pr-8">
          
          {/* Restringimos el ancho para mantener el formato retrato perfecto */}
          <div className="relative w-full max-w-[360px] xl:max-w-[400px] group">
            
            {/* Líneas y sombras estructurales desplazadas */}
            {/* Borde verde que se separa al hacer hover */}
            <div className="absolute top-3 left-3 w-full h-full border-2 border-verde-monte rounded-3xl transition-all duration-500 ease-out group-hover:top-5 group-hover:left-5 z-0 pointer-events-none"></div>
            {/* Bloque terracota de fondo que le da peso y base */}
            <div className="absolute top-6 left-6 w-full h-full bg-terracota/10 rounded-3xl transition-all duration-500 ease-out group-hover:top-8 group-hover:left-8 z-0 pointer-events-none"></div>

            {/* Contenedor principal de la foto (Marco blanco ultra fino) */}
            <div className="relative bg-blanco p-1.5 rounded-3xl shadow-lg z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1">
              
              <div className="relative w-full aspect-[4/5] rounded-[1.25rem] overflow-hidden bg-azul-noche/5">
                {/* Imagen estática y nítida */}
                <img 
                  src="/banner 3.jpeg" 
                  alt="Equipo de Desarrollo i trabajando en el territorio" 
                  className="w-full h-full object-cover object-center" 
                />
                
                {/* Borde interno ultra sutil para que la foto no se "funda" con el blanco */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1.25rem] pointer-events-none"></div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
