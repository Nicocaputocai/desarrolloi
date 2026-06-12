import React from 'react';

// Simulamos los datasets que tendrían disponibles
const datasets = [
  {
    id: 1,
    titulo: 'Censo de Arbolado Público Urbano',
    categoria: 'Biodiversidad',
    descripcion: 'Relevamiento geolocalizado de especies nativas y exóticas, estado fitosanitario y diámetro.',
    actualizacion: 'Mayo 2026',
    formatos: ['CSV', 'GeoJSON']
  },
  {
    id: 2,
    titulo: 'Islas de Calor Urbano (Verano 2025/2026)',
    categoria: 'Clima',
    descripcion: 'Temperaturas superficiales registradas por sensores satelitales en los 40 municipios del AMBA.',
    actualizacion: 'Marzo 2026',
    formatos: ['CSV', 'JSON']
  },
  {
    id: 3,
    titulo: 'Puntos Verdes de Recepción',
    categoria: 'Residuos',
    descripcion: 'Ubicación, horarios y materiales aceptados en los centros de recepción de reciclables cooperativos.',
    actualizacion: 'Abril 2026',
    formatos: ['CSV', 'JSON']
  },
  {
    id: 4,
    titulo: 'Calidad del Aire',
    categoria: 'Contaminación',
    descripcion: 'Medición de material particulado (PM2.5 y PM10) en nodos de alto tránsito vehicular.',
    actualizacion: 'Junio 2026',
    formatos: ['CSV']
  }
];

export default function DatosAbiertos() {
  return (
    <div className="bg-crema min-h-screen pb-24">
      
      {/* ENCABEZADO TÉCNICO */}
      <div className="bg-azul-noche pt-24 pb-16 px-6 lg:px-8 border-b-4 border-amarillo">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-verde-monte"></span>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-crema/60">
              Repositorio Público
            </span>
          </div>
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-crema tracking-tight mb-6">
            Datos Abiertos
          </h1>
          <p className="font-serif text-xl text-crema/80 max-w-2xl leading-relaxed">
            Accedé a nuestros datasets estructurados. Información empírica sobre el AMBA para potenciar la investigación, el periodismo de datos y el diseño de políticas públicas.
          </p>
        </div>
      </div>

      {/* LISTADO DE DATASETS */}
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 mt-12">
        
        {/* Barra de búsqueda / Filtros (Visual por ahora) */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-blanco p-4 rounded-lg border border-azul-noche/10 mb-8 shadow-sm">
          <div className="font-sans text-azul-noche font-semibold text-sm mb-4 sm:mb-0">
            {datasets.length} conjuntos de datos disponibles
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="Buscar por palabra clave..." 
              className="bg-crema border border-azul-noche/10 rounded px-4 py-2 text-sm font-sans w-full sm:w-64 focus:outline-none focus:border-terracota transition-colors"
            />
            <button className="bg-azul-noche text-crema px-4 py-2 rounded text-sm font-sans font-bold hover:bg-azul-noche/80 transition-colors">
              Buscar
            </button>
          </div>
        </div>

        {/* Grilla de Datos */}
        <div className="flex flex-col gap-4">
          {datasets.map((dataset) => (
            <div key={dataset.id} className="bg-blanco p-6 md:p-8 rounded-lg border border-azul-noche/10 hover:border-terracota/50 transition-colors shadow-sm group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Info Principal */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-terracota">
                      {dataset.categoria}
                    </span>
                    <span className="font-sans text-[10px] text-azul-noche/40">
                      Actualizado: {dataset.actualizacion}
                    </span>
                  </div>
                  <h2 className="font-sans text-2xl font-bold text-azul-noche mb-2 group-hover:text-terracota transition-colors">
                    {dataset.titulo}
                  </h2>
                  <p className="font-serif text-azul-noche/70 text-sm">
                    {dataset.descripcion}
                  </p>
                </div>

                {/* Botones de Formatos */}
                <div className="flex flex-wrap gap-2 md:w-48 justify-start md:justify-end">
                  {dataset.formatos.map((formato, index) => (
                    <button 
                      key={index}
                      className="inline-flex items-center justify-center bg-crema border border-azul-noche/10 text-azul-noche font-sans text-xs font-bold px-3 py-1.5 rounded hover:bg-verde-monte hover:text-crema hover:border-verde-monte transition-colors"
                    >
                      {formato} ↓
                    </button>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}