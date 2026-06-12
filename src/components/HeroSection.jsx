import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-crema relative overflow-hidden pt-20 pb-24 lg:pt-24 lg:pb-32 px-6 lg:px-8 min-h-[85vh] flex items-center">
      
      {/* Geometría de fondo: Patrón sutil (Estilo Bauhaus/Flyer) */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 rounded-full border-[2px] border-azul-noche/10"></div>
        <div className="absolute top-40 -right-10 w-72 h-72 rounded-full border-[2px] border-terracota/10"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full border-[40px] border-verde-monte/5"></div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 w-full">
        
        {/* TEXTO PRINCIPAL (Tamanos equilibrados PC/Móvil del Turno 17) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Etiqueta superior */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-verde-monte/10 border border-verde-monte/20 mb-6 lg:mb-8 w-fit">
             <span className="w-2.5 h-2.5 rounded-full bg-verde-monte animate-pulse"></span>
             <span className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-verde-monte">
               Agenda 2030
             </span>
          </div>

          {/* Título Principal */}
          <h1 className="font-sans font-extrabold text-azul-noche leading-[1.05] tracking-tight mb-6 lg:mb-8 text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem] max-w-3xl">
            Datos y territorio para la <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
               <span className="text-verde-monte">acción climática.</span>
               {/* Subrayado manual SVG */}
               <svg className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-terracota" viewBox="0 0 400 20" preserveAspectRatio="none">
                 <path d="M0,10 Q200,20 400,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
               </svg>
            </span>
          </h1>

          {/* Bajada */}
          <p className="font-serif italic text-xl md:text-2xl text-azul-noche/80 leading-relaxed max-w-xl lg:max-w-2xl mb-10 lg:mb-12">
            Transformamos la investigación rigurosa en herramientas y políticas públicas que impactan directo en las comunidades.
          </p>
        </div>

        {/* FOTO CON EFECTOS (Bloque restablecido y minimalista) */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          {/* Anillos concéntricos decorativos detrás de la imagen */}
          <div className="absolute -inset-4 border border-azul-noche/10 rounded-[2rem] rotate-3 pointer-events-none"></div>
          <div className="absolute -inset-8 border border-terracota/20 rounded-[2.5rem] -rotate-2 pointer-events-none"></div>
          
          {/* Contenedor principal de la imagen */}
          <div className="relative bg-blanco p-2 rounded-2xl shadow-2xl z-10">
            {/* Placeholder de la foto */}
            <div className="w-full h-[400px] sm:h-[500px] bg-azul-noche/5 rounded-xl flex flex-col items-center justify-center overflow-hidden relative">
              
              {/* Líneas abstractas topográficas simuladas */}
              <svg className="absolute inset-0 w-full h-full text-azul-noche/10" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M 0 20 C 30 10, 60 40, 100 30" />
                <path d="M 0 40 C 40 50, 70 20, 100 60" />
                <path d="M 0 60 C 20 80, 80 50, 100 90" />
              </svg>

              <span className="font-sans text-azul-noche/40 font-medium">
                [Tu Fotografía del Territorio Acá]
              </span>
            </div>
            
            {/* EL BLOQUE DE VOLUNTARIADO/MUNICIPIOS FUE ELIMINADO DE ACÁ */}
          </div>
        </div>

      </div>
    </section>
  );
}