import React from "react";

export default function Manifesto() {
  return (
    <section className="bg-azul-noche py-16 md:py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Geometría sutil de fondo (Trazo fino) */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-15">
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full border border-verde-monte/30"></div>
        <div className="absolute top-20 -right-10 w-[400px] h-[400px] rounded-full border border-terracota/20"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* COLUMNA IZQUIERDA: La cita más compacta */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-terracota"></span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-crema/50">
              Punto de Partida
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-crema leading-[1.2] tracking-tight max-w-2xl">
            «El cuidado de la casa común no termina.{" "}
            <br className="hidden sm:block" />
            <span className="italic text-terracota">Empieza otra vez.</span>»
          </h2>
        </div>

        {/* COLUMNA DERECHA: La brújula integrada y adaptada */}
        <div className="lg:col-span-5 lg:pl-6 flex flex-col justify-center">
          <div className="border-l border-verde-monte pl-4 py-1 mb-4">
            <p className="font-sans font-bold text-crema text-base">
              Nuestra brújula
            </p>
            <p className="font-sans text-[10px] text-crema/40 uppercase tracking-[0.15em] mt-0.5 font-bold">
              Asociación Civil Desarrollo i
            </p>
          </div>

          <p className="font-sans text-crema/70 text-base leading-relaxed max-w-xl">
            Transformar la realidad exige más que buenas intenciones. Asumimos
            el desafío de la crisis socioambiental desarrollando herramientas de
            gestión, fomentando la educación ambiental y diseñando políticas
            públicas para que cada comunidad sea protagonista de su propio
            futuro.
          </p>
        </div>
      </div>
    </section>
  );
}
