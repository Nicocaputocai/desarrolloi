import React from 'react';
import { Link } from 'react-router-dom';

export default function Voluntariado() {
  return (
    <section className="bg-verde-monte py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
      
      {/* Geometría de fondo: un bloque en diagonal para dar dinamismo */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-crema/5 -skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* TEXTO Y LLAMADO A LA ACCIÓN */}
        <div className="lg:w-1/2 z-10">
          <div className="flex items-center gap-4 mb-6">
             <span className="w-8 h-[2px] bg-amarillo"></span>
             <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-crema/90">
               Sumate al equipo
             </span>
          </div>
          
          <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-crema leading-[1.05] tracking-tight mb-8">
            El territorio necesita <span className="font-serif italic font-normal text-amarillo block mt-2">manos.</span>
          </h2>
          
          <p className="font-sans text-lg text-crema/90 max-w-lg mb-10 leading-relaxed">
            La transformación real no ocurre detrás de un escritorio. Ya sea censando arbolado en los barrios, impulsando la educación ambiental en escuelas o gestionando datos, tu participación es el motor del cambio.
          </p>
          
          <Link to="/" className="inline-flex items-center justify-center bg-amarillo text-azul-noche font-sans font-bold py-4 px-8 hover:bg-crema transition-all hover:shadow-xl hover:-translate-y-1 group">
            Quiero ser voluntario 
            <span className="ml-3 text-terracota group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* ESPACIO VISUAL / FOTO */}
        <div className="lg:w-1/2 w-full relative">
          {/* Círculo decorativo offset */}
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-amarillo/30 z-0"></div>
          
          {/* Contenedor de la foto con un corte geométrico */}
          <div className="relative aspect-square md:aspect-[4/3] w-full bg-azul-noche/20 rounded-tl-[100px] rounded-br-[100px] overflow-hidden border border-crema/10 flex items-center justify-center backdrop-blur-sm z-10">
            <span className="font-sans font-bold text-crema/60 tracking-widest uppercase text-sm text-center px-8">
              [Foto del equipo en acción]
            </span>
            
            {/* Filtro sutil verde */}
            <div className="absolute inset-0 bg-verde-monte/20 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}