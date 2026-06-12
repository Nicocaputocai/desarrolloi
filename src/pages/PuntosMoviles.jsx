import React from 'react';
import { Link } from 'react-router-dom';

export default function PuntosVerdesMoviles() {
  return (
    <div className="bg-crema min-h-screen selection:bg-terracota/20">
      
      {/* HEADER EDITORIAL: El anuncio del cierre */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 lg:px-8 border-b border-azul-noche/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-terracota/5 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
               <span className="w-12 h-[2px] bg-terracota"></span>
               <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-azul-noche/60">
                 Caso de Éxito · 2021-2025
               </span>
            </div>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-azul-noche leading-[1] tracking-tight max-w-4xl mb-6">
              ¡Misión <span className="font-serif italic font-normal text-terracota">cumplida!</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-azul-noche/80 leading-relaxed max-w-2xl">
              Después de cuatro años de trabajo colectivo, cerramos una etapa del Programa de "Puntos Verdes Móviles".
            </p>
          </div>
        </div>
      </header>

      {/* 1. MÉTRICAS DE IMPACTO (Grilla Bento con los números fuertes) */}
      <section className="py-24 px-6 lg:px-8 bg-blanco border-b border-azul-noche/5">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-16">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-terracota mb-4">Resultados</p>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-azul-noche">
              ¿Qué logramos juntos?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Dato 1: Toneladas */}
            <div className="bg-azul-noche p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-amarillo mb-8">Recuperación</span>
              <div>
                <div className="font-sans text-6xl font-extrabold text-crema tracking-tighter mb-2">+23</div>
                <p className="font-sans text-crema/80 text-sm leading-snug">Toneladas de materiales reciclables recuperados y entregados a la cooperativa Cartón y Justicia.</p>
              </div>
            </div>

            {/* Dato 2: Jornadas */}
            <div className="bg-crema border border-azul-noche/10 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-terracota mb-8">Territorio</span>
              <div>
                <div className="font-sans text-6xl font-extrabold text-azul-noche tracking-tighter mb-2">+200</div>
                <p className="font-sans text-azul-noche/70 text-sm leading-snug">Jornadas de recolección comunitaria sostenidas en el tiempo a lo largo de la ciudad.</p>
              </div>
            </div>

            {/* Dato 3: Vecinos */}
            <div className="bg-crema border border-azul-noche/10 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-verde-monte mb-8">Comunidad</span>
              <div>
                <div className="font-sans text-6xl font-extrabold text-azul-noche tracking-tighter mb-2">+1.500</div>
                <p className="font-sans text-azul-noche/70 text-sm leading-snug">Vecinos y vecinas involucrados activamente separando sus residuos en origen.</p>
              </div>
            </div>

            {/* Dato 4: Voluntarios & Convenios */}
            <div className="bg-terracota p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-crema/70 mb-8">Red de acción</span>
              <div>
                <div className="font-sans text-6xl font-extrabold text-crema tracking-tighter mb-2">50</div>
                <p className="font-sans text-crema/90 text-sm leading-snug">Voluntarios comprometidos y 4 convenios firmados con organizaciones de la sociedad civil.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EL MOTIVO DEL CIERRE (Texto institucional fuerte) */}
      <section className="bg-terracota py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full border-[60px] border-amarillo/30"></div>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5">
             <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-crema leading-[1.1] mb-8">
               ¿Por qué cerramos esta etapa?
             </h2>
             <div className="w-16 h-1 bg-amarillo"></div>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <p className="font-sans text-xl md:text-2xl text-crema font-medium leading-relaxed mb-6">
              Consideramos que el objetivo de sensibilización e incidencia pública ha sido alcanzado.
            </p>
            <p className="font-sans text-lg text-crema/80 leading-relaxed mb-6">
              El motor de este programa fue visibilizar la problemática de los residuos sólidos urbanos e instalar la separación en origen en la agenda pública local. Hoy, el municipio de Lanús cuenta con un programa propio de puntos verdes fijos y móviles.
            </p>
            <p className="font-sans text-lg text-crema/80 leading-relaxed">
              Esta experiencia colectiva demuestra que la participación ciudadana sostenida puede impulsar cambios concretos en las políticas públicas del Estado.
            </p>
          </div>
        </div>
      </section>

      {/* 3. AGRADECIMIENTOS (Estilo afiche limpio) */}
      <section className="py-24 px-6 lg:px-8 bg-crema text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-verde-monte"></span>
            <span className="w-2 h-2 rounded-full bg-amarillo"></span>
            <span className="w-2 h-2 rounded-full bg-terracota"></span>
          </div>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-azul-noche mb-8">
            Gracias a quienes lo hicieron posible.
          </h2>
          <p className="font-serif text-xl text-azul-noche/80 leading-relaxed mb-8">
            A los voluntarios y voluntarias que organizaron la logística en cada jornada. A las organizaciones que acompañaron el proceso. A la cooperativa Cartón y Justicia. Y especialmente a cada vecino y vecina de Lanús que se comprometió con la construcción de hábitos sostenibles.
          </p>
          <p className="font-sans text-sm font-bold uppercase tracking-widest text-terracota">
            Cada acción cuenta.
          </p>
        </div>
      </section>

      {/* 4. EL PUENTE A LA NUEVA ETAPA (CTA hacia Guardianes/Arbin) */}
      <section className="bg-verde-monte py-24 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-amarillo mb-6">
              Próxima Etapa
            </p>
            <h2 className="font-sans text-5xl md:text-6xl font-bold text-crema leading-[1.05] tracking-tight mb-8">
              El cuidado de la casa común no termina. <span className="font-serif italic font-normal text-amarillo block mt-2">Empieza otra vez.</span>
            </h2>
            <p className="font-sans text-lg text-crema/90 max-w-xl">
              Iniciamos un nuevo desafío central para las ciudades: la adaptación y mitigación del cambio climático a través del arbolado público urbano.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col sm:flex-row gap-4 md:justify-center">
            <Link to="/guardianes" className="inline-flex items-center justify-center bg-crema text-azul-noche font-sans font-bold text-sm md:text-base py-4 px-8 rounded hover:bg-amarillo transition-colors shadow-lg">
              Ver programa Guardianes
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}