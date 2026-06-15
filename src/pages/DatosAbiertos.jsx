import React, { useState } from 'react';

// Simulamos los datasets que tendrían disponibles
const datasets = [
  {
    id: 1,
    titulo: 'Clubes',
    categoria: 'Clubes',
    descripcion: 'Predios deportivos y sedes sociales.',
    actualizacion: 'Noviembre 2022',
    formatos: ['API','CSV', 'JSON', 'GEOJSON'],
    enlaces: {
      api: 'https://api.desarrolloi.org/api/club',
      csv: 'https://drive.google.com/file/d/1dyYSnyfg8hbcMu17tmeiQLrMKfrjiaj4/view',
      json: 'https://drive.google.com/file/d/1ORd3TzACuJhvB2qyMBnVjJtR-NGNhShV/view',
      geojson: 'https://drive.google.com/file/d/1APMWJ3HMS_IBy40mlso43CL1phLOjDqc/view'
    }
  },
  {
    id: 2,
    titulo: 'Dependencias municipales',
    categoria: 'Dependencias',
    descripcion: 'Edificios públicos; centros culturales y museos locales; delegaciones municipales; etc.',
    actualizacion: 'Noviembre 2022',
    formatos: ['API','CSV', 'JSON', 'GEOJSON'],
    enlaces: {
      api: 'https://api.desarrolloi.org/api/municipalDependence',
      csv: 'https://drive.google.com/file/d/1gmSL2qch23bQFnHkqjofqdq8kIV6D-_T/view',
      json: 'https://drive.google.com/file/d/157gOH09POIXSPNiB52f1AjAnFGB978Kq/view',
      geojson: 'https://drive.google.com/file/d/1q2tgyrQHIshnySXQKDSWHUGkcAf1n0jn/view'
    }
  },
  {
    id: 3,
    titulo: 'Educación',
    categoria: 'Educación',
    descripcion: 'Establecimientos educativos segmentados según nivel educativo (inicial; primaria; secundaria; universitaria); tipo de gestión (pública o privada); y otras clasificaciones relevantes.',
    actualizacion: 'Noviembre 2022',
    formatos: ['API','CSV', 'JSON', 'GEOJSON'],
    enlaces: {
      api: 'https://api.desarrolloi.org/api/education',
      csv: 'https://drive.google.com/file/d/1MAwm0s2NHbLhx0hvltJHr51MTCi7H2mj/view',
      json: 'https://drive.google.com/file/d/1jKHL2-AZOQ40jOwqCK7nwngQzuiHr6nX/view',
      geojson: 'https://drive.google.com/file/d/1YMjfBLagSktE98AP6tQPsGYz-OrKOTxM/view'
    }
  },
  {
    id: 4,
    titulo: 'Plazas y parques',
    categoria: 'Espacio público',
    descripcion: 'Espacios públicos del distrito con sus respectivos polígonos.',
    actualizacion: 'Noviembre 2022',
    formatos: ['API','CSV', 'JSON', 'GEOJSON'],
    enlaces: {
      api: 'https://api.desarrolloi.org/api/square-park',
      csv: 'https://drive.google.com/file/d/1gy3IKrQTxP2uDpXt7007bweYgMR7vOs2/view',
      json: 'https://drive.google.com/file/d/1dP-ey-zjELw-7WpCYgnqxp1wZhcnuRCI/view',
      geojson: 'https://drive.google.com/file/d/13t95RxK8enxB_hY_TIqxD7m0DgThvyzB/view'
    }
  },
    {
    id: 5,
    titulo: 'Salud',
    categoria: 'Dependencias',
    descripcion: 'Establecimientos sanitarios clasificados por tipo de establecimiento (hospitales, unidades sanitarias y centros de salud) y por tipo de gestión (pública y privada).',
    actualizacion: 'Noviembre 2022',
    formatos: ['API','CSV', 'JSON', 'GEOJSON'],
    enlaces: {
      api: 'https://api.desarrolloi.org/api/health',
      csv: 'https://drive.google.com/file/d/1ZLcbi5nhQI1v08TblR6U7OIMHYbCO6G0/view',
      json: 'https://drive.google.com/file/d/10s3fBsuXCklpWgx4sFkHDWfcHJq8zrXm/view',
      geojson: 'https://drive.google.com/file/d/1oUMAdJH5iWDGmKe1chd6S1UGNlUx2aOf/view'
    }
  },
  {
    id: 6,
    titulo: 'Seguridad',
    categoria: 'Dependencias',
    descripcion: 'Comisarías y sedes del Poder Judicial. Bajo este eje se muestran también los destacamentos de bomberos.',
    actualizacion: 'Noviembre 2022',
    formatos: ['API','CSV', 'JSON', 'GEOJSON'],
    enlaces: {
      api: 'https://api.desarrolloi.org/api/security',
      csv: 'https://drive.google.com/file/d/14PdeVBRtBn_v3PrQtFFHPEAUH5aZgwgt/view',
      json: 'https://drive.google.com/file/d/1RGPS-FUyUi4d3fU0A0eaIpc_aNc8I-wJ/view',
      geojson: 'https://drive.google.com/file/d/1zdRF5DhahSyckmY4nYl4RuLCtGcPGA1m/view'
    }
  },
  {
    id: 7,
    titulo: 'Transporte público',
    categoria: 'Transporte',
    descripcion: 'Estaciones de trenes y terminales de líneas urbanas de colectivos.',
    actualizacion: 'Noviembre 2022',
    formatos: ['API','CSV', 'JSON', 'GEOJSON'],
    enlaces: {
      api: 'https://api.desarrolloi.org/api/transport',
      csv: 'https://drive.google.com/file/d/1loss6UCLmxmHIlBcR8fR5HfyHNXwW0Zg/view',
      json: 'https://drive.google.com/file/d/1oCT38lfmGLpC-aA1-FzvDVAFWK4r-xYu/view',
      geojson: 'https://drive.google.com/file/d/1iRS88L0gqaUG-zWLQj_3eH1bIPGK5IZ-/view'
    }
  }
];

export default function DatosAbiertos() {
  // 2. ESTADO DEL BUSCADOR: Guarda lo que el usuario escribe
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  // 3. LÓGICA DE FILTRADO EN TIEMPO REAL
  // Toma la lista original y devuelve solo los que coinciden con la búsqueda
  const datosFiltrados = datasets.filter((dataset) => {
    const busqueda = terminoBusqueda.toLowerCase();
    return (
      dataset.titulo.toLowerCase().includes(busqueda) ||
      dataset.categoria.toLowerCase().includes(busqueda) ||
      dataset.descripcion.toLowerCase().includes(busqueda)
    );
  });
  return (
<section className="bg-crema min-h-screen py-24 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* CABECERA: Título y Buscador Dinámico */}
        <div className="bg-blanco p-4 md:p-6 rounded-xl border border-azul-noche/10 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Contador Dinámico (cambia si filtrás) */}
          <h2 className="font-sans font-bold text-lg text-azul-noche">
            {datosFiltrados.length} {datosFiltrados.length === 1 ? 'conjunto de datos disponible' : 'conjuntos de datos disponibles'}
          </h2>
          
          <div className="flex w-full md:w-auto">
            {/* El Input ahora reacciona a cada tecla (onChange) */}
            <input 
              type="text" 
              placeholder="Buscar por palabra clave..." 
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
              className="w-full md:w-80 bg-crema/50 border border-azul-noche/10 rounded-md px-4 py-2 font-sans text-sm text-azul-noche focus:outline-none focus:border-terracota focus:ring-1 focus:ring-terracota transition-all"
            />
          </div>
        </div>

        {/* MENSAJE CUANDO NO HAY RESULTADOS */}
        {datosFiltrados.length === 0 && (
          <div className="text-center py-12 bg-blanco rounded-xl border border-azul-noche/5">
            <p className="font-sans text-azul-noche/60">No se encontraron datos para "{terminoBusqueda}"</p>
            <button 
              onClick={() => setTerminoBusqueda('')}
              className="mt-4 text-terracota font-bold text-sm hover:underline"
            >
              Borrar búsqueda
            </button>
          </div>
        )}

        {/* LISTA DE CONJUNTOS DE DATOS */}
<div className="flex flex-col gap-4">
          {datosFiltrados.map((dataset) => (
            <div 
              key={dataset.id} 
              className="bg-blanco p-6 lg:p-8 rounded-xl border border-azul-noche/10 shadow-sm flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between hover:shadow-md transition-shadow"
            >
              
              {/* Bloque de Texto (Izquierda) */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-terracota">
                    {dataset.categoria}
                  </span>
                  <span className="font-sans text-[10px] text-azul-noche/40 uppercase tracking-wider">
                    Actualizado: {dataset.fecha}
                  </span>
                </div>
                <h3 className="font-sans text-2xl font-bold text-azul-noche mb-3">
                  {dataset.titulo}
                </h3>
                <p className="font-serif text-base text-azul-noche/70 leading-relaxed">
                  {dataset.descripcion}
                </p>
              </div>

              {/* Bloque de Botones / Enlaces (Derecha) */}
              <div className="flex items-center lg:justify-end">
                <div className="flex flex-wrap gap-2">
                  <a 
                    href={dataset.enlaces.api} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-azul-noche/20 text-azul-noche hover:bg-azul-noche hover:text-blanco rounded-md px-4 py-1.5 font-sans text-xs font-bold transition-colors"
                  > API <span className="ml-1 opacity-60">↓</span> </a>

                  <a 
                    href={dataset.enlaces.csv} download
                    className="inline-flex items-center justify-center border border-azul-noche/20 text-azul-noche hover:bg-azul-noche hover:text-blanco rounded-md px-4 py-1.5 font-sans text-xs font-bold transition-colors"
                  > CSV <span className="ml-1 opacity-60">↓</span> </a>

                  <a 
                    href={dataset.enlaces.json} download
                    className="inline-flex items-center justify-center border border-azul-noche/20 text-azul-noche hover:bg-azul-noche hover:text-blanco rounded-md px-4 py-1.5 font-sans text-xs font-bold transition-colors"
                  > JSON <span className="ml-1 opacity-60">↓</span> </a>

                  <a 
                    href={dataset.enlaces.geojson} download
                    className="inline-flex items-center justify-center border border-azul-noche/20 text-azul-noche hover:bg-azul-noche hover:text-blanco rounded-md px-4 py-1.5 font-sans text-xs font-bold transition-colors"
                  > GEOJSON <span className="ml-1 opacity-60">↓</span> </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}