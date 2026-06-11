import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative bg-crema overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      
      {/* 1. EFECTOS GEOMÉTRICOS DE FONDO (Estilo Carbon Direct) */}
      {/* Círculo gigante difuminado para dar profundidad */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-verde-monte/5 blur-3xl pointer-events-none"></div>
      
      {/* Semicírculo sólido Terracota (Abstracción) */}
      <svg className="absolute bottom-10 left-0 -ml-24 text-terracota/20 w-64 h-64 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M 100 50 A 50 50 0 0 0 0 50 Z" transform="rotate(45 50 50)" />
      </svg>

      {/* Grilla de puntos sutil (Data/Tecnología) */}
      <div className="absolute inset-0 bg-[radial-gradient(#183A52_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXTO CORTO Y DIRECTO (Izquierda) */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-verde-monte/10 border border-verde-monte/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-verde-monte animate-pulse"></span>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-verde-monte">Agenda 2030 AMBA</span>
          </div>
          
          <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold text-azul-noche leading-[1.1] tracking-tight mb-8">
            Datos y territorio para la <span className="text-verde-monte relative whitespace-nowrap">
              acción climática
              {/* Línea subrayada curva estilo "dibujo a mano" */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-amarillo" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
              </svg>
            </span>
          </h1>
          
          <p className="font-serif italic text-xl sm:text-2xl text-azul-noche/80 mb-10 leading-relaxed">
            Transformamos la investigación rigurosa en herramientas y políticas públicas que impactan directo en las comunidades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-azul-noche text-crema font-sans font-semibold py-4 px-8 rounded-lg hover:bg-azul-noche/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Explorar Trabajos
            </button>
            <button className="bg-blanco border border-azul-noche/10 text-azul-noche font-sans font-semibold py-4 px-8 rounded-lg hover:border-azul-noche/30 transition-all flex items-center justify-center gap-2">
              Datos Abiertos <span className="text-terracota">→</span>
            </button>
          </div>
        </div>

        {/* FOTO CON EFECTOS (Derecha) */}
        <div className="relative">
          {/* Anillos concéntricos decorativos detrás de la imagen */}
          <div className="absolute -inset-4 border border-azul-noche/10 rounded-[2rem] rotate-3 pointer-events-none"></div>
          <div className="absolute -inset-8 border border-terracota/20 rounded-[2.5rem] -rotate-2 pointer-events-none"></div>
          
          {/* Contenedor principal de la imagen */}
          <div className="relative bg-blanco p-2 rounded-2xl shadow-2xl z-10">
            {/* Reemplazá este div con la etiqueta img cuando tengas tus fotos. 
              Ej: <img src="/tu-foto.jpg" className="w-full h-[500px] object-cover rounded-xl" />
            */}
            <div className="w-full h-[400px] sm:h-[500px] bg-azul-noche/5 rounded-xl flex flex-col items-center justify-center overflow-hidden relative">
              
              {/* Líneas abstractas cruzando la imagen simulando un mapa topográfico */}
              <svg className="absolute inset-0 w-full h-full text-azul-noche/10" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M 0 20 C 30 10, 60 40, 100 30" />
                <path d="M 0 40 C 40 50, 70 20, 100 60" />
                <path d="M 0 60 C 20 80, 80 50, 100 90" />
              </svg>

              <span className="font-sans text-azul-noche/40 font-medium">
                [Tu Fotografía del Territorio Acá]
              </span>
            </div>

            {/* Tarjeta flotante superpuesta (Dato de impacto) */}
            <div className="absolute -bottom-6 -left-6 bg-blanco p-5 rounded-xl shadow-xl border border-crema flex items-center gap-4 animate-bounce hover:animate-none">
              <div className="w-12 h-12 rounded-full bg-amarillo/20 flex items-center justify-center text-amarillo font-bold text-xl">
                +
              </div>
              <div>
                <p className="font-sans font-bold text-azul-noche leading-none text-lg">50 Municipios</p>
                <p className="font-sans text-xs text-azul-noche/60 mt-1 uppercase tracking-wider">Impacto territorial</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}