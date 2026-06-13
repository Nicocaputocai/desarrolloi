import React from "react";
import { Link } from "react-router-dom";

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
            Comprometerse{" "}
            <span className="font-serif italic font-normal text-amarillo block mt-2">
              para transformar.
            </span>
          </h2>

          <p className="font-sans text-lg text-crema/90 max-w-lg mb-10 leading-relaxed">
            La transformación real exige poner el cuerpo. Creemos en el conocimiento aplicado y en la fuerza de la
            participación ciudadana para lograr un impacto real. Nuestras jornadas son el
            lugar donde esa articulación sucede: relevamos información de campo,
            forestamos nuestras calles y llevamos educación ambiental a las
            aulas. Si buscás que tu compromiso tenga un impacto directo y
            medible, tu lugar está acá.

          </p>

<a 
            href="https://instagram.com/desarrolloi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-amarillo text-azul-noche font-sans font-bold py-4 px-8 hover:bg-crema transition-all hover:shadow-xl hover:-translate-y-1 group rounded-md"
          >
            Quiero participar 
            <span className="ml-3 text-terracota group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* ESPACIO VISUAL / FOTO REAL (Formato Vertical) */}
        <div className="lg:w-1/2 w-full relative flex justify-center lg:justify-end group">
          {/* Círculo decorativo offset que reacciona al hover */}
          <div className="absolute top-4 right-4 lg:-top-6 lg:-right-6 w-32 h-32 rounded-full border-2 border-amarillo/30 z-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>

          {/* Contenedor de la foto ajustado para imagen vertical */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md bg-azul-noche/20 rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl z-10 border border-crema/10">
            <img
              src="/Voluntariado.jpeg"
              alt="Equipo de voluntarios de Desarrollo i plantando un árbol"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Filtro sutil para integrar colores sin oscurecer demasiado */}
            <div className="absolute inset-0 bg-verde-monte/10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
