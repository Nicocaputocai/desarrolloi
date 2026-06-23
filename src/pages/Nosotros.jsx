import React, { useState, useEffect } from "react";

export default function Nosotros() {
  const [index, setIndex] = useState(0);

const ejes = [
    {
      titulo: "Conocimiento.",
      desc: "Análisis técnico y rigor académico para fundamentar la toma de decisiones.",
      color: "bg-azul-noche",
    },
    {
      titulo: "Sostenibilidad.",
      desc: "Diseño de políticas públicas que garantizan un desarrollo urbano equilibrado y resiliente.",
      color: "bg-verde-monte",
    },
    {
      titulo: "Territorio.",
      desc: "Integración activa de las comunidades locales para transformar la realidad social.",
      color: "bg-terracota",
    },
  ];

  // Rotación automática cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ejes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-crema min-h-screen font-sans">
      {/* 1. SECCIÓN PRINCIPAL INTEGRADA (Hero + Fichero) */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 bg-crema overflow-hidden min-h-[85vh] flex items-center">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* COLUMNA IZQUIERDA: MANIFIESTO */}
          <div className="lg:col-span-6 z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-terracota"></span>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-terracota">
                Institucional
              </p>
            </div>

            <h1 className="text-azul-noche text-5xl md:text-6xl lg:text-[4.8rem] font-extrabold leading-[1.05] tracking-tight mb-8">
              <span className="block text-2xl md:text-3xl font-medium text-gris-texto mb-4 tracking-normal">
                Instituto de Estudios y Políticas Públicas
              </span>
              Desarrollo i.
            </h1>

            <div className="pl-6 border-l-4 border-verde-monte max-w-2xl">
              <p className="text-xl md:text-2xl text-azul-noche/80 leading-relaxed font-medium">
                Somos un espacio de encuentro y producción de conocimiento
                dedicado a pensar y planificar el desarrollo estratégico y
                sostenible de nuestras ciudades.
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA: EL FICHERO GIRATORIO MEJORADO */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[450px]">
            <div className="absolute w-[500px] h-[500px] bg-azul-noche/[0.03] rounded-full blur-3xl"></div>

<div className="relative w-full max-w-[400px] h-[320px]">
              {ejes.map((eje, i) => {
                const isFront = i === index;
                const isNext = i === (index + 1) % ejes.length;
                const isBack = i === (index + 2) % ejes.length;

                return (
                  <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`
                      absolute inset-0 p-12 rounded-[2rem] shadow-xl cursor-pointer
                      transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/10
                      ${eje.color} 
                      ${isFront ? "z-30 scale-100 translate-x-0 translate-y-0 rotate-0 opacity-100 shadow-2xl" : ""}
                      ${isNext ? "z-20 scale-[0.96] translate-x-6 translate-y-4 rotate-2 opacity-70 hover:opacity-90" : ""}
                      ${isBack ? "z-10 scale-[0.92] translate-x-12 translate-y-8 rotate-4 opacity-40" : ""}
                    `}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Título limpio, sin iconos ni cuadrados */}
                        <h3 className="text-white text-4xl font-extrabold mb-6 tracking-tight italic leading-none">
                          {eje.titulo}
                        </h3>
                        {/* Descripción clara */}
                        <p className="text-white/90 text-lg font-medium leading-relaxed">
                          {eje.desc}
                        </p>
                      </div>

                      {/* Indicador de posición minimalista */}
                      <div className="flex gap-2">
                        {ejes.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`h-1.5 rounded-full transition-all duration-500 ${dotIndex === i ? "w-10 bg-white" : "w-4 bg-white/30"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUIÉNES SOMOS: EL EQUIPO Y EL VALOR (Caja a la izquierda) */}
<section className="py-24 px-6 lg:px-8 relative overflow-hidden">
  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-verde-monte/5 rounded-full blur-3xl -z-10"></div>
  
  <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    
    {/* LA CAJA AZUL PASA A LA IZQUIERDA */}
    <div className="bg-azul-noche p-10 md:p-16 rounded-[3rem] text-crema shadow-2xl relative order-1">
      <div className="absolute top-8 right-8 text-terracota/20 text-8xl font-serif italic">"</div>
      <p className="text-2xl md:text-3xl font-medium leading-snug relative z-10">
       Con diálogo, participación y pluralidad convocamos a la generación de nuevas ideas y la construcción de síntesis superadoras para el desarrollo sostenible.
      </p>
      <div className="mt-8 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-terracota"></span>
          <p className="text-terracota uppercase tracking-widest text-xs font-bold">Nuestro Propósito</p>
      </div>
    </div>

    {/* EL TEXTO PASA A LA DERECHA */}
    <div className="order-2 flex flex-col justify-center h-full">
      <h2 className="text-azul-noche text-4xl font-bold mb-8 italic">¿Quiénes somos?</h2>
      <p className="text-lg text-gris-texto leading-relaxed mb-6">
        Somos un grupo de <strong>jóvenes profesionales</strong> convencidos de que el conocimiento es la herramienta fundamental para dar respuesta a las complejidades de la sociedad actual. 
      </p>
      <p className="text-lg text-gris-texto leading-relaxed">
        Desde la sociedad civil, promovemos el diálogo, la participación y la pluralidad. Convocamos a la generación de nuevas ideas para impulsar el desarrollo urbano con una mirada técnica, inclusiva y humana.
      </p>
    </div>
    
  </div>
</section>
    </main>
  );
}
