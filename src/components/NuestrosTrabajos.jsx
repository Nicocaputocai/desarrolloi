import React from 'react';
import { Link } from 'react-router-dom';

const trabajos = [

    // EJE TERRITORIO Y AMBIENTE (Verde Monte)
  {
    id: 1, titulo: 'Guardianes de la Casa Común',
    categoria: 'Territorio y Ambiente', colorPildora: 'bg-verde-monte text-crema',
    descripcion: 'Participación ciudadana y tecnología en escuelas secundarias.',
    url: '/guardianes', tipoAccion: 'interno',
    bgImage: 'bg-verde-monte'
  },

    {
    id: 2, titulo: 'Arbin',
    categoria: 'Tecnología y Datos', colorPildora: 'bg-azul-noche text-crema',
    descripcion: 'Aplicación para el relevamiento del arbolado público urbano.',
    url: '/arbin', tipoAccion: 'interno',
    bgImage: 'bg-azul-noche'
  },
  // EJE TECNOLOGÍA Y DATOS (Azul Noche)
  {
    id: 3, titulo: 'Mapa Interactivo',
    categoria: 'Tecnología y Datos', colorPildora: 'bg-azul-noche text-crema',
    descripcion: 'Mapa interactivo de la infraestructura y espacios públicos de Lanús.',
    url: 'https://mapa.desarrolloi.org/', tipoAccion: 'externo',
    bgImage: 'bg-azul-noche' 
  },
  {
    id: 4, titulo: 'Catálogo de Datos',
    categoria: 'Tecnología y Datos', colorPildora: 'bg-azul-noche text-crema',
    descripcion: 'Repositorio de datos abiertos.',
    url: '/datos-abiertos', tipoAccion: 'interno',
    bgImage: 'bg-azul-noche'
  },

  

  {
    id: 5, titulo: 'Puntos Verdes Móviles',
    categoria: 'Territorio y Ambiente', colorPildora: 'bg-verde-monte text-crema',
    descripcion: 'Gestión comunitaria de Residuos Sólidos Urbanos.',
    url: '/puntos-moviles', tipoAccion: 'interno',
    bgImage: 'bg-verde-monte'
  },
  

  // EJE INVESTIGACIÓN Y NORMATIVA (Terracota)
  {
    id: 6, titulo: 'Ordenanza Puntos Verdes',
    categoria: 'Normativa', colorPildora: 'bg-terracota text-crema',
    descripcion: 'Proyecto para la gestión diferenciada de Residuos Sólidos Urbanos.',
    url: '/ordenanza.pdf', tipoAccion: 'descarga',
    bgImage: 'bg-terracota'
  },
  {
    id: 7, titulo: 'Políticas Criminales I',
    categoria: 'Investigación', colorPildora: 'bg-terracota text-crema',
    descripcion: 'Intersección entre gestión territorial y seguridad ciudadana.',
    url: '/libro-1.pdf', tipoAccion: 'descarga',
    bgImage: 'bg-terracota'
  },
  {
    id: 8, titulo: 'Políticas Criminales II',
    categoria: 'Investigación', colorPildora: 'bg-terracota text-crema',
    descripcion: 'Segunda parte de la investigación aplicada a dinámicas del AMBA.',
    url: '/libro-2.pdf', tipoAccion: 'descarga',
    bgImage: 'bg-terracota'
  },

];

export default function NuestrosTrabajos() {
  const renderTarjeta = (trabajo) => {
    const contenido = (
      <div className="group flex flex-col h-full bg-blanco border border-azul-noche/10 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1">
        
        {/* CABECERA VISUAL (Módulo de Foto) */}
        <div className={`relative aspect-[4/3] w-full overflow-hidden ${trabajo.bgImage}`}>
          
          {/* Patrón de puntos para simular textura mientras no hay fotos */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
          
          {/* Acá irá tu etiqueta <img> real */}
          {/* <img src="/tu-foto.jpg" alt={trabajo.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> */}

          {/* Píldora de Categoría (Flotando sobre la foto) */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-3 py-1.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest shadow-sm ${trabajo.colorPildora}`}>
              {trabajo.categoria}
            </span>
          </div>
        </div>

        {/* CUERPO DE TEXTO (Fondo Blanco, alta legibilidad) */}
        <div className="p-6 flex flex-col flex-grow bg-blanco">
          <h3 className="font-sans text-xl font-bold text-azul-noche mb-3 leading-tight group-hover:text-terracota transition-colors duration-300">
            {trabajo.titulo}
          </h3>
          
          <p className="font-serif text-azul-noche/70 text-sm leading-relaxed mb-6 line-clamp-3">
            {trabajo.descripcion}
          </p>
          
          {/* Botón / Link al pie */}
          <div className="mt-auto pt-4 border-t border-azul-noche/5 flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-widest text-azul-noche">
            <span className="group-hover:text-terracota transition-colors duration-300">
              {trabajo.tipoAccion === 'descarga' ? 'Descargar PDF' : 'Ver Proyecto'}
            </span>
            <span className="w-6 h-[2px] bg-azul-noche/20 group-hover:w-10 group-hover:bg-terracota transition-all duration-300"></span>
          </div>
        </div>

      </div>
    );

    if (trabajo.tipoAccion === 'interno') return <Link to={trabajo.url} key={trabajo.id} className="block h-full">{contenido}</Link>;
    if (trabajo.tipoAccion === 'externo') return <a href={trabajo.url} target="_blank" rel="noopener noreferrer" key={trabajo.id} className="block h-full">{contenido}</a>;
    return <a href={trabajo.url} download key={trabajo.id} className="block h-full">{contenido}</a>;
  };

  return (
    <section className="bg-crema py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      
      {/* Geometría de fondo */}
      <div className="absolute top-0 right-0 -mr-64 -mt-32 w-[600px] h-[600px] rounded-full bg-azul-noche/5 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-terracota/5 pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] relative z-10">
        
        {/* CABECERA SECCIÓN EDITORIAL */}
        <div className="mb-12 md:mb-16">
          <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-terracota mb-4">
            Investigación · Territorio · Acción
          </p>
          <h2 className="font-sans text-5xl md:text-6xl lg:text-[4rem] font-bold text-azul-noche leading-[1.05] tracking-tight">
            Nuestros <span className="font-serif italic font-normal text-terracota">trabajos.</span>
          </h2>
        </div>

        {/* GRILLA DE TARJETAS LUMINOSAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trabajos.map(renderTarjeta)}
        </div>
        
      </div>
    </section>
  );
}