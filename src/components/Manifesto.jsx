import React from 'react';

export default function Manifesto() {
  return (
    <section className="bg-azul-noche py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
      
      {/* Geometría sutil de fondo para no dejar el azul plano */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full border-[40px] border-verde-monte/30"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* COLUMNA IZQUIERDA: La declaración fuerte */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[2px] bg-terracota"></span>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-crema/60">
              Punto de Partida
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-crema leading-[1.1] tracking-tight">
            «El conocimiento que no pisa tierra, <span className="italic text-terracota">no transforma.</span>»
          </h2>
        </div>

        {/* COLUMNA DERECHA: La bajada explicativa con la línea vertical estilo flyer */}
        <div className="lg:col-span-4 lg:pl-12 flex flex-col justify-center">
          <div className="border-l-2 border-verde-monte pl-6 py-2 mb-6">
            <p className="font-sans font-bold text-crema text-lg">
              Nuestra brújula
            </p>
            <p className="font-sans text-sm text-crema/60 uppercase tracking-widest mt-1">
              Asociación Civil Desarrollo i
            </p>
          </div>

          <p className="font-sans text-crema/80 text-lg leading-relaxed">
            No somos un think tank aislado ni una ONG exclusivamente social. Construimos el puente necesario entre la investigación académica rigurosa y las realidades concretas del AMBA.
          </p>
        </div>

      </div>
    </section>
  );
}