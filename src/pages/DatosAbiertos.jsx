import React from 'react';

export default function Guardianes() {
  return (
    <div className="bg-crema min-h-screen selection:bg-verde-monte/20">
      
      {/* HEADER EDITORIAL */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 lg:px-8 border-b border-azul-noche/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
               <span className="w-12 h-[2px] bg-terracota"></span>
               <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-azul-noche/60">
                 Programa Institucional
               </span>
            </div>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-azul-noche leading-[1] tracking-tight max-w-4xl">
              Formar guardianes de la <span className="font-serif italic font-normal text-terracota">Casa Común.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pl-12 border-l-2 border-verde-monte lg:py-2">
            <p className="font-sans text-base text-azul-noche/70 leading-relaxed">
              El programa lleva la participación comunitaria y la acción climática a las aulas del AMBA, transformando a estudiantes de secundaria en protagonistas de su entorno.
            </p>
          </div>
        </div>
      </header>

      {/* MANIFIESTO */}
      <section className="bg-terracota py-20 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="font-serif italic text-3xl md:text-5xl text-crema leading-tight mb-8">
            «La educación ambiental es también educación para la democracia.»
          </h2>
          <p className="font-sans text-lg text-crema/90 max-w-2xl mx-auto leading-relaxed">
            No basta con reciclar: necesitamos repensar cómo habitamos y decidimos. Formar guardianes empieza en la escuela, con un ciclo de ecología integral y acción colectiva.
          </p>
        </div>
      </section>

      {/* METODOLOGÍA: LOS 4 CAMINOS */}
      <section className="py-24 px-6 lg:px-8 bg-crema relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border-[12px] border-azul-noche/5 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-terracota mb-4">La Propuesta</p>
              <h2 className="font-sans text-4xl md:text-5xl font-bold text-azul-noche">
                Cuatro caminos de acción.
              </h2>
            </div>
            <p className="font-serif italic text-xl text-azul-noche/70 max-w-sm md:text-right">
              Aprender, medir, decidir y plantar: el ciclo completo del cuidado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-azul-noche p-8 rounded-2xl flex flex-col h-64 justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <span className="w-12 h-12 rounded-full bg-crema text-azul-noche flex items-center justify-center font-bold text-xl">01</span>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-amarillo mb-2">Aprender</p>
                <h3 className="font-sans text-xl font-bold text-crema leading-tight">Cambio climático y naturaleza</h3>
              </div>
            </div>
            <div className="bg-verde-monte p-8 rounded-2xl flex flex-col h-64 justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <span className="w-12 h-12 rounded-full bg-crema text-verde-monte flex items-center justify-center font-bold text-xl">02</span>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-amarillo mb-2">Censar</p>
                <h3 className="font-sans text-xl font-bold text-crema leading-tight">Árboles del barrio con tecnología</h3>
              </div>
            </div>
            <div className="bg-terracota p-8 rounded-2xl flex flex-col h-64 justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <span className="w-12 h-12 rounded-full bg-crema text-terracota flex items-center justify-center font-bold text-xl">03</span>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-crema/70 mb-2">Decidir</p>
                <h3 className="font-sans text-xl font-bold text-crema leading-tight">Participar, debatir y decidir en común</h3>
              </div>
            </div>
            <div className="bg-amarillo p-8 rounded-2xl flex flex-col h-64 justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <span className="w-12 h-12 rounded-full bg-azul-noche text-amarillo flex items-center justify-center font-bold text-xl">04</span>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-azul-noche/60 mb-2">Plantar</p>
                <h3 className="font-sans text-xl font-bold text-azul-noche leading-tight">Cuidar especies nativas</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL TERRITORIO: LAS 4 CLASES (Grilla de 4 columnas) */}
      <section className="py-24 px-6 lg:px-8 bg-blanco border-y border-azul-noche/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-azul-noche mb-6 tracking-tight">
              El territorio como aula.
            </h2>
            <p className="font-serif text-xl text-azul-noche/70 leading-relaxed">
              A través de cuatro encuentros, llevamos los conceptos ambientales a la realidad inmediata de cada barrio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-10">
            {/* Clase 1 */}
            <div className="flex flex-col gap-5 group">
              <div className="aspect-[3/4] bg-crema rounded-2xl overflow-hidden relative shadow-inner"></div>
              <div className="flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 bg-verde-monte/10 text-verde-monte rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">Encuentro 1</span>
                <h3 className="font-sans text-2xl font-bold text-azul-noche mb-2">Mitigar y adaptar.</h3>
                <p className="font-sans text-azul-noche/70 text-sm leading-relaxed mt-auto">Trabajamos sobre contaminación, residuos y biodiversidad.</p>
              </div>
            </div>
            {/* Clase 2 */}
            <div className="flex flex-col gap-5 group">
              <div className="aspect-[3/4] bg-crema rounded-2xl overflow-hidden relative shadow-inner"></div>
              <div className="flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 bg-terracota/10 text-terracota rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">Encuentro 2</span>
                <h3 className="font-sans text-2xl font-bold text-azul-noche mb-2">Mirar el relieve.</h3>
                <p className="font-sans text-azul-noche/70 text-sm leading-relaxed mt-auto">Aprendemos a leer el territorio para poder transformarlo.</p>
              </div>
            </div>
            {/* Clase 3 */}
            <div className="flex flex-col gap-5 group">
              <div className="aspect-[3/4] bg-crema rounded-2xl overflow-hidden relative shadow-inner"></div>
              <div className="flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 bg-amarillo/20 text-azul-noche rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">Encuentro 3</span>
                <h3 className="font-sans text-2xl font-bold text-azul-noche mb-2">Nativas vs. exóticas.</h3>
                <p className="font-sans text-azul-noche/70 text-sm leading-relaxed mt-auto">Cada especie que plantamos define qué biodiversidad cuidamos.</p>
              </div>
            </div>
            {/* Clase 4 */}
            <div className="flex flex-col gap-5 group">
              <div className="aspect-[3/4] bg-crema rounded-2xl overflow-hidden relative shadow-inner"></div>
              <div className="flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 bg-azul-noche/10 text-azul-noche rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">Encuentro 4</span>
                <h3 className="font-sans text-2xl font-bold text-azul-noche mb-2">Tecnología cívica.</h3>
                <p className="font-sans text-azul-noche/70 text-sm leading-relaxed mt-auto">Tecnología al servicio de la Casa Común y el cuidado del entorno.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-verde-monte py-24 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h2 className="font-sans text-5xl md:text-6xl font-bold text-crema leading-[1.05] tracking-tight mb-8">
              ¿Sos parte de una escuela o organización?
            </h2>
            <p className="font-serif italic text-2xl text-crema/90">Construyamos guardianes en cada barrio.</p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <a href="mailto:institucional@desarrolloi.org" className="bg-terracota text-crema font-bold py-5 px-10 rounded-full hover:bg-terracota/90 transition-all shadow-xl">Contactanos →</a>
          </div>
        </div>
      </section>
    </div>
  );
}