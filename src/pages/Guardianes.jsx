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
                 Programa de Educación Ambiental
               </span>
            </div>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-azul-noche leading-[1] tracking-tight max-w-4xl">
              Guardianes de la <span className="font-serif italic font-normal text-terracota">Casa Común.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pl-12 border-l-2 border-verde-monte lg:py-2">
            <p className="font-sans text-base text-azul-noche/70 leading-relaxed">
              El programa integra educación, tecnología y participación comunitaria para escuelas secundarias, generando experiencias pedagógicas transformadoras.
            </p>
          </div>
        </div>
      </header>

      {/* 1. EL MANIFIESTO CENTRAL */}
      <section className="bg-terracota py-20 px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="font-serif italic text-3xl md:text-5xl text-crema leading-tight mb-8">
            «La educación ambiental debe ser educación para la democracia.»
          </h2>
          <p className="font-sans text-lg text-crema/90 max-w-2xl mx-auto leading-relaxed">
            El arbolado urbano se convierte en un vehículo pedagógico para trabajar la gobernanza ambiental, la participación ciudadana y la acción comunitaria. Cada árbol plantado, cuidado y censado es también un ejercicio de ciudadanía y corresponsabilidad.
          </p>
        </div>
      </section>

      {/* 2. LA METODOLOGÍA: LOS 4 CAMINOS */}
      <section className="py-24 px-6 lg:px-8 bg-crema relative overflow-hidden">
        {/* Geometría de fondo asimétrica sutil */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border-[12px] border-azul-noche/5 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-terracota mb-4">Estructura</p>
              <h2 className="font-sans text-4xl md:text-5xl font-bold text-azul-noche">
                4 etapas progresivas de aprendizaje y acción.
              </h2>
            </div>
            <p className="font-serif italic text-xl text-azul-noche/70 max-w-sm md:text-right">
              Aprender, observar, analizar y actuar: la lógica completa del programa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tarjeta 1 */}
            <div className="bg-azul-noche p-8 rounded-2xl flex flex-col h-64 justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <span className="w-12 h-12 rounded-full bg-crema text-azul-noche flex items-center justify-center font-bold text-xl">01</span>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-amarillo mb-2">Taller de Formación</p>
                <h3 className="font-sans text-xl font-bold text-crema leading-tight">Clases de formación teórico-práctica</h3>
              </div>
            </div>
            {/* Tarjeta 2 */}
            <div className="bg-verde-monte p-8 rounded-2xl flex flex-col h-64 justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <span className="w-12 h-12 rounded-full bg-crema text-verde-monte flex items-center justify-center font-bold text-xl">02</span>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-amarillo mb-2">Trabajo Territorial</p>
                <h3 className="font-sans text-xl font-bold text-crema leading-tight">Censo participativo con aplicación móvil Arbin</h3>
              </div>
            </div>
            {/* Tarjeta 3 */}
            <div className="bg-terracota p-8 rounded-2xl flex flex-col h-64 justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <span className="w-12 h-12 rounded-full bg-crema text-terracota flex items-center justify-center font-bold text-xl">03</span>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-crema/70 mb-2">Democracia Participativa</p>
                <h3 className="font-sans text-xl font-bold text-crema leading-tight">Debate y elaboración de propuestas</h3>
              </div>
            </div>
            {/* Tarjeta 4 */}
            <div className="bg-amarillo p-8 rounded-2xl flex flex-col h-64 justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <span className="w-12 h-12 rounded-full bg-azul-noche text-amarillo flex items-center justify-center font-bold text-xl">04</span>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-azul-noche/60 mb-2">Implementación</p>
                <h3 className="font-sans text-xl font-bold text-azul-noche leading-tight">Acciones pensadas por la comunidad</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EL TERRITORIO: FOTOS DEL AULA */}
      <section className="py-24 px-6 lg:px-8 bg-blanco border-y border-azul-noche/5 relative overflow-hidden">
        {/* Geometría concéntrica de fondo style placa */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full border-[40px] border-azul-noche/10"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          
          <div className="mb-16 max-w-2xl">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-terracota mb-4">Puesta en campo</p>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-azul-noche mb-6 tracking-tight">
              Contenido de los encuentros.
            </h2>
            <p className="font-serif text-xl text-azul-noche/70 leading-relaxed">
              A lo largo de cuatro clases, los estudiantes construyen los conocimientos necesarios para prepararse para la acción territorial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-10">
            
            {/* Clase 1 */}
            <div className="flex flex-col gap-5 group">
              <div className="aspect-[3/4] bg-azul-noche/5 rounded-2xl overflow-hidden relative shadow-inner">
                <img 
                  src="/modulo 1.jpeg" 
                  alt="Encuentro 1: La Casa Común" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 bg-verde-monte/10 text-verde-monte rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">Módulo 1 </span>
                <h3 className="font-sans text-2xl font-bold text-azul-noche mb-2">La Casa Común.</h3>
                <p className="font-sans text-azul-noche/70 text-sm leading-relaxed mt-auto">
                  Qué es, su evolución histórica, como influye en nuestras vidas y en nuestro barrio.
                </p>
              </div>
            </div>

            {/* Clase 2 */}
            <div className="flex flex-col gap-5 group">
              <div className="aspect-[3/4] bg-azul-noche/5 rounded-2xl overflow-hidden relative shadow-inner">
                <img 
                  src="/modulo 2.jpeg" 
                  alt="Encuentro 2: Cambio Climático" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 bg-amarillo/20 text-azul-noche rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">Módulo 2</span>
                <h3 className="font-sans text-2xl font-bold text-azul-noche mb-2">Cambio Climático.</h3>
                <p className="font-sans text-azul-noche/70 text-sm leading-relaxed mt-auto">
                  Adaptación y mitigación: entender la crisis para poder actuar.
                </p>
              </div>
            </div>

            {/* Clase 3 */}
            <div className="flex flex-col gap-5 group">
              <div className="aspect-[3/4] bg-azul-noche/5 rounded-2xl overflow-hidden relative shadow-inner">
                <img 
                  src="/modulo 3.jpeg" 
                  alt="Encuentro 3: Arbolado Urbano" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 bg-terracota/10 text-terracota rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">Módulo 3</span>
                <h3 className="font-sans text-2xl font-bold text-azul-noche mb-2">Arbolado Urbano.</h3>
                <p className="font-sans text-azul-noche/70 text-sm leading-relaxed mt-auto">
                  Importancia del arbolado, ecosistemas, y plantas nativas, exóticas, ornamentales y alimenticias.
                </p>
              </div>
            </div>

            {/* Clase 4 */}
            <div className="flex flex-col gap-5 group border border-azul-noche/10 p-6 rounded-2xl bg-azul-noche text-crema lg:border-none lg:p-0 lg:bg-transparent lg:text-azul-noche transition-colors duration-300">
              <div className="aspect-[3/4] bg-azul-noche/10 rounded-2xl overflow-hidden relative shadow-inner lg:bg-azul-noche/5">
                <img 
                  src="/modulo 4.jpeg" 
                  alt="Encuentro 4: Nuevos Paradigmas" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 bg-amarillo text-azul-noche rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">Módulo 4</span>
                <h3 className="font-sans text-2xl font-bold mb-2">Nuevos Paradigmas.</h3>
                <p className="font-sans opacity-90 text-sm leading-relaxed mt-auto lg:text-azul-noche/70">
                  Pasa de la tecnología como bien de consumo a herramienta comunitaria.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

     {/* 4. CTA: LLAMADO A LA ACCIÓN */}
      <section className="bg-verde-monte py-24 px-6 lg:px-8 relative overflow-hidden border-t-4 border-terracota">
        
        {/* Geometría de fondo súper sutil y limpia (reemplaza al círculo oscuro) */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/3 w-[600px] h-[600px] rounded-full border border-crema/10 pointer-events-none"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/4 w-[450px] h-[450px] rounded-full border border-crema/5 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-amarillo mb-6">
              Participación
            </p>
            <h2 className="font-sans text-5xl md:text-6xl font-bold text-crema leading-[1.05] tracking-tight mb-8">
              ¿Sos parte de una escuela, municipio u <span className="text-amarillo">organización?</span>
            </h2>
            <p className="font-serif italic text-2xl text-crema/90">
              Sumate al programa y construyamos guardianes en cada barrio del AMBA.
            </p>
          </div>

          <div className="md:col-span-5 flex md:justify-end relative z-20">
            <a 
              href="mailto:info@desarrolloi.org" 
              className="inline-flex items-center justify-center bg-terracota text-crema font-sans font-bold text-lg py-5 px-10 rounded-[2rem] hover:bg-terracota/90 hover:-translate-y-1 transition-all shadow-xl hover:shadow-terracota/20"
            >
              Contactanos por mail →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}