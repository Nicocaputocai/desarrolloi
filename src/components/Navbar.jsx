// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-crema border-b border-azul-noche/10 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between p-4 lg:px-8" aria-label="Global">
        
        {/* Logo tipográfico Desarrollo i */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-baseline font-sans font-bold text-2xl tracking-tight">
            <span className="text-azul-noche">desarrollo</span>
            <span className="text-verde-monte ml-1">i</span>
            <span className="text-terracota text-3xl leading-none">.</span>
          </Link>
        </div>

        {/* Enlaces centrales (Desktop) */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link to="/" className="text-sm font-semibold leading-6 text-azul-noche hover:text-amarillo transition-colors font-sans">
            Inicio
          </Link>
          <Link to="/datos-abiertos" className="text-sm font-semibold leading-6 text-azul-noche hover:text-amarillo transition-colors font-sans">
            Datos Abiertos
          </Link>
          <a href="https://mapa.desarrolloi.org/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-azul-noche hover:text-amarillo transition-colors font-sans">
            Mapa Interactivo
          </a>
        </div>

        {/* Botón de acción (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/" className="text-sm font-semibold leading-6 bg-azul-noche text-crema px-5 py-2.5 rounded hover:bg-azul-noche/80 transition-colors font-sans">
            Voluntariado
          </Link>
        </div>
        
      </nav>
    </header>
  );
}