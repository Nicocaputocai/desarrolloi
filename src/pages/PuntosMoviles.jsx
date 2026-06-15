import React from 'react';
import { Link } from 'react-router-dom';

export default function PuntosVerdesMoviles() {
  return (
    <div className="bg-crema min-h-screen selection:bg-terracota/20">
      
      {/* HEADER EDITORIAL: Identidad Visual Reforzada */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 lg:px-8 border-b border-azul-noche/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-verde-monte/5 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
               <span className="w-12 h-[2px] bg-terracota"></span>
               <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-azul-noche/60">
                 Caso de Éxito · 2021-2025
               </span>
            </div>
            {/* Título con colores corregidos */}
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight max-w-4xl mb-6">
              <span className="text-verde-monte">Puntos Verdes</span> <br />
              <span className="text-azul-noche italic font-serif font-normal">Móviles.</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-azul-noche/80 leading-relaxed max-w-2xl">
              Un programa de acción territorial que instaló la gestión comunitaria de reciclables y la separación en origen en la agenda pública de la ciudad.
            </p>
          </div>
        </div>
      </header>

     {/* 1. MÉTRICAS DE IMPACTO */}
      <section className="py-24 px-6 lg:px-8 bg-blanco border-b border-azul-noche/5">
        <div className="max-w-[1400px] mx-auto">
          
          {/* NUEVO ENCABEZADO */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
               <span className="w-8 h-[2px] bg-terracota"></span>
               <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-terracota">Resultados</p>
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-azul-noche">
              Impacto del programa.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tarjeta 1 */}
            <div className="bg-azul-noche p-8 rounded-2xl flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-amarillo mb-8">Recuperación</span>
              <div>
                <div className="font-sans text-6xl font-extrabold text-crema tracking-tighter mb-2">+23</div>
                <p className="font-sans text-crema/80 text-sm leading-snug">Toneladas de materiales entregados a la cooperativa Cartón y Justicia.</p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-crema border border-azul-noche/10 p-8 rounded-2xl flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-terracota mb-8">Territorio</span>
              <div>
                <div className="font-sans text-6xl font-extrabold text-azul-noche tracking-tighter mb-2">+200</div>
                <p className="font-sans text-azul-noche/70 text-sm leading-snug">Jornadas de recolección comunitaria sostenidas en el tiempo.</p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-crema border border-azul-noche/10 p-8 rounded-2xl flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-verde-monte mb-8">Comunidad</span>
              <div>
                <div className="font-sans text-6xl font-extrabold text-azul-noche tracking-tighter mb-2">+1.500</div>
                <p className="font-sans text-azul-noche/70 text-sm leading-snug">Vecinos involucrados activamente separando en origen.</p>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-terracota p-8 rounded-2xl flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-crema/70 mb-8">Red de acción</span>
              <div>
                <div className="font-sans text-6xl font-extrabold text-crema tracking-tighter mb-2">50</div>
                <p className="font-sans text-crema/90 text-sm leading-snug">Voluntarios comprometidos y 4 convenios firmados con la sociedad civil.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* NUEVA SECCIÓN: GALERÍA DE ACCIÓN TERRITORIAL (Clásica y Bulletproof) */}
      <section className="py-24 px-6 lg:px-8 bg-crema relative overflow-hidden">
        
        {/* Fondo Texturizado: Trama de puntos */}
        <div 
          className="absolute inset-0 z-0 opacity-5" 
          style={{ backgroundImage: 'radial-gradient(#1e3a5f 2px, transparent 2px)', backgroundSize: '30px 30px' }}
        ></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          
          {/* Encabezado */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
               <span className="w-8 h-[2px] bg-verde-monte"></span>
               <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-verde-monte">Impacto real</p>
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-azul-noche">El valor de lo colectivo.</h2>
          </div>
          
          {/* Contenedor de la Grilla con el detalle sutil */}
          <div className="relative">
            
            {/* Detalle de diseño: Marcos finos desfasados por detrás */}
            <div className="hidden md:block absolute -inset-4 border border-terracota/30 rounded-[2.5rem] -z-10 translate-x-3 translate-y-3 pointer-events-none"></div>
            <div className="hidden md:block absolute -inset-4 border border-verde-monte/20 rounded-[2.5rem] -z-10 -translate-x-3 -translate-y-3 pointer-events-none"></div>

            {/* Tarjeta contenedora blanca (Paspartú) */}
            <div className="bg-blanco p-3 md:p-4 rounded-[2rem] shadow-sm border border-azul-noche/5">
              
              {/* Grilla estricta (Bento) para evitar deformaciones */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[280px]">
                
                {/* Foto Grande Izquierda (Ocupa 2 filas) */}
                <div className="md:col-span-7 md:row-span-2 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-azul-noche/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
                  <img 
                    src="/Punto5.jpeg" 
                    alt="Operativo Punto Verde Móvil" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
                
                {/* Foto Arriba Derecha (Ocupa 1 fila) */}
                <div className="md:col-span-5 md:row-span-1 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-verde-monte/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
                  <img 
                    src="/Punto1.jpeg" 
                    alt="Vecinos reciclando" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>

                {/* Foto Abajo Derecha (Ocupa 1 fila) */}
                <div className="md:col-span-5 md:row-span-1 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-terracota/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
                  <img 
                    src="/Punto8.JPG" 
                    alt="Voluntarios Desarrollo i" 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

     {/* 2. EL CIERRE / CASO DE ÉXITO (Contraste mejorado) */}
      <section className="bg-terracota py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5">
             {/* Cambio drástico de color: usamos azul-noche para un contraste perfecto */}
             <h2 className="font-serif italic text-5xl md:text-6xl text-crema leading-[1.1] mb-6">
               ¡Misión <span className="font-sans font-bold not-italic text-azul-noche block mt-2">cumplida!</span>
             </h2>
             <div className="w-16 h-1 bg-azul-noche mb-8"></div>
             <p className="font-sans text-sm font-bold uppercase tracking-widest text-crema/70">
               Cierre de etapa
             </p>
          </div>

          <div className="lg:col-span-7 lg:pl-12 border-l border-crema/20">
            <p className="font-sans text-xl md:text-2xl text-crema font-medium leading-relaxed mb-6">
              El objetivo de sensibilización e incidencia pública ha sido alcanzado.
            </p>
            <p className="font-sans text-lg text-crema/80 leading-relaxed mb-6">
              Visibilizamos la problemática de los residuos sólidos urbanos e instalamos la separación en origen en la agenda pública. Hoy, el municipio de Lanús cuenta con un programa propio de puntos verdes fijos y móviles.
            </p>
            <p className="font-sans text-lg text-crema/80 leading-relaxed italic border-t border-crema/10 pt-6">
              Esta experiencia demuestra que la participación ciudadana sostenida impulsa cambios reales en las políticas de Estado.
            </p>
          </div>
        </div>
      </section>

      {/* 4. EL PUENTE A LA NUEVA ETAPA */}
      <section className="bg-verde-monte py-24 px-6 lg:px-8 border-t-4 border-amarillo">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <h2 className="font-sans text-4xl md:text-6xl font-bold text-crema leading-tight mb-6">
              El cuidado no termina. <br />
              <span className="font-serif italic font-normal text-amarillo">Empieza otra vez.</span>
            </h2>
            <p className="font-sans text-lg text-crema/90">
              Iniciamos un nuevo desafío central: la mitigación del cambio climático a través del arbolado público urbano.
            </p>
          </div>
          <Link to="/guardianes" className="bg-amarillo text-azul-noche font-sans font-bold py-5 px-10 rounded-full hover:bg-crema transition-all shadow-2xl hover:-translate-y-1">
            Ver Guardianes de la Casa Común →
          </Link>
        </div>
      </section>

    </div>
  );
}