import React from 'react';
import { Link } from 'react-router-dom';

const trabajos = [
  {
    id: 1, titulo: 'Mapa Interactivo',
    categoria: 'Herramienta Cívica', colorPildora: 'bg-amarillo text-azul-noche',
    descripcion: 'Visualización geoespacial de indicadores ambientales del AMBA.',
    url: 'https://mapa.desarrolloi.org/', tipoAccion: 'externo',
    // Simulamos la foto oscurecida de fondo
    bgImage: 'bg-azul-noche' 
  },
  {
    id: 2, titulo: 'Catálogo de Datos',
    categoria: 'Datos Abiertos', colorPildora: 'bg-amarillo text-azul-noche',
    descripcion: 'Repositorio estructurado para el análisis de políticas públicas.',
    url: '/datos-abiertos', tipoAccion: 'interno',
    bgImage: 'bg-azul-noche'
  },
  {
    id: 7, titulo: 'Guardianes de la Casa Común',
    categoria: 'Educación Ambiental', colorPildora: 'bg-verde-monte text-blanco',
    descripcion: 'Participación ciudadana y tecnología en escuelas secundarias.',
    url: '/guardianes', tipoAccion: 'interno',
    bgImage: 'bg-verde-monte' // Acá iría la foto de los chicos en el aula
  },
  {
    id: 3, titulo: 'Arbin App',
    categoria: 'Censo participativo', colorPildora: 'bg-terracota text-blanco',
    descripcion: 'Aplicación para el relevamiento del arbolado público urbano.',
    url: '/arbin', tipoAccion: 'interno',
    bgImage: 'bg-terracota'
  },
  {
    id: 4, titulo: 'Políticas Criminales I',
    categoria: 'Investigación', colorPildora: 'bg-crema text-azul-noche',
    descripcion: 'Intersección entre gestión territorial y seguridad ciudadana.',
    url: '/libro-1.pdf', tipoAccion: 'descarga',
    bgImage: 'bg-azul-noche'
  },
  {
    id: 5, titulo: 'Políticas Criminales II',
    categoria: 'Investigación', colorPildora: 'bg-crema text-azul-noche',
    descripcion: 'Segunda parte de la investigación aplicada a dinámicas del AMBA.',
    url: '/libro-2.pdf', tipoAccion: 'descarga',
    bgImage: 'bg-azul-noche'
  },
  {
    id: 6, titulo: 'Ordenanza Puntos Verdes',
    categoria: 'Normativa', colorPildora: 'bg-azul-noche text-blanco border border-blanco/20',
    descripcion: 'Proyecto legislativo para estandarizar la gestión de reciclables.',
    url: '/ordenanza.pdf', tipoAccion: 'descarga',
    bgImage: 'bg-azul-noche'
  },
  {
    id: 8, titulo: 'Puntos Verdes Móviles',
    categoria: 'Territorio', colorPildora: 'bg-terracota text-blanco',
    descripcion: 'Articulación comunitaria para la gestión de reciclables.',
    url: '/puntos-moviles', tipoAccion: 'interno',
    bgImage: 'bg-terracota'
  }
];

export default function NuestrosTrabajos() {
  const renderTarjeta = (trabajo) => {
    const contenido = (
      <div className="relative h-[400px] w-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
        
        {/* IMAGEN DE FONDO (Acá iría la etiqueta <img> cuando tengas las fotos reales) */}
        <div className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 ${trabajo.bgImage}`}>
          {/* Este div simula una foto por ahora, con un patrón suave */}
          <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blanco to-transparent"></div>
        </div>

       {/* EL GRADIENTE OSCURO (Forzando el contraste con base negra) */}
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-azul-noche/90 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* CONTENIDO DE LA TARJETA */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          
          {/* Píldora de Categoría (Idéntica a tu Instagram) */}
          <span className={`w-fit px-3 py-1.5 rounded-full font-sans text-xs font-bold tracking-wide mb-4 ${trabajo.colorPildora}`}>
            {trabajo.categoria}
          </span>
          
          {/* Título */}
          <h3 className="font-sans text-3xl font-bold text-blanco mb-3 leading-tight group-hover:-translate-y-1 transition-transform duration-300">
            {trabajo.titulo}
          </h3>
          
          {/* Descripción */}
          <p className="font-serif text-crema/80 text-base line-clamp-2 mb-4 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
            {trabajo.descripcion}
          </p>

          {/* Flechita sutil */}
          <div className="text-amarillo font-sans text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
            {trabajo.tipoAccion === 'descarga' ? 'Descargar ↓' : 'Explorar →'}
          </div>
        </div>
      </div>
    );

    if (trabajo.tipoAccion === 'interno') return <Link to={trabajo.url} key={trabajo.id}>{contenido}</Link>;
    if (trabajo.tipoAccion === 'externo') return <a href={trabajo.url} target="_blank" rel="noopener noreferrer" key={trabajo.id}>{contenido}</a>;
    return <a href={trabajo.url} download key={trabajo.id}>{contenido}</a>;
  };

  return (
    <section className="bg-crema py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      
      {/* CÍRCULOS GIGANTES DE FONDO (Igual que en tus flyers) */}
      <div className="absolute top-0 right-0 -mr-64 -mt-32 w-[600px] h-[600px] rounded-full bg-azul-noche/5 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-terracota/5 pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] relative z-10">
        
        {/* CABECERA SECCIÓN EDITORIAL */}
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-terracota mb-4">
            Investigación · Territorio · Acción
          </p>
          <h2 className="font-sans text-5xl md:text-6xl font-bold text-azul-noche leading-[1.1] max-w-2xl">
            Nuestros <span className="font-serif italic font-normal text-terracota">trabajos.</span>
          </h2>
        </div>

        {/* GRILLA DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trabajos.map(renderTarjeta)}
        </div>
        
      </div>
    </section>
  );
}