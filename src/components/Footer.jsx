// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-azul-noche py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Columna 1: Marca institucional */}
        <div>
          <span className="flex items-baseline font-sans font-bold text-3xl tracking-tight mb-4">
            <span className="text-crema">desarrollo</span>
            <span className="text-verde-monte ml-1">i</span>
            <span className="text-terracota text-4xl leading-none">.</span>
          </span>
          <p className="text-crema/80 font-serif italic text-base max-w-sm">
            Entre el conocimiento y el territorio.
          </p>
          <p className="text-crema/60 font-sans text-sm mt-6">
            Área Metropolitana de Buenos Aires (AMBA)
          </p>
        </div>
        
        {/* Columna 2: Navegación de Proyectos */}
        <div className="flex flex-col gap-3 font-sans">
          <h3 className="text-blanco font-bold tracking-wide uppercase text-xs mb-2 text-amarillo">Nuestros Trabajos</h3>
          <Link to="/guardianes" className="text-crema/70 hover:text-blanco text-sm transition-colors">Guardianes de la Casa Común</Link>
          <Link to="/arbin" className="text-crema/70 hover:text-blanco text-sm transition-colors">App Arbin</Link>
          <Link to="/puntos-moviles" className="text-crema/70 hover:text-blanco text-sm transition-colors">Puntos Verdes Móviles</Link>
          <Link to="/datos-abiertos" className="text-crema/70 hover:text-blanco text-sm transition-colors">Catálogo de Datos</Link>
        </div>

        {/* Columna 3: Contacto */}
        <div className="flex flex-col gap-3 font-sans">
          <h3 className="text-blanco font-bold tracking-wide uppercase text-xs mb-2 text-amarillo">Contacto</h3>
          <a href="mailto:institucional@desarrolloi.org" className="text-crema/70 hover:text-blanco text-sm transition-colors">institucional@desarrolloi.org</a>
          
          <div className="mt-4 flex gap-4">
            {/* Círculos como placeholders para los iconos de redes sociales */}
            <div className="w-10 h-10 rounded-full bg-crema/10 hover:bg-verde-monte transition-colors cursor-pointer flex items-center justify-center text-crema text-xs">IG</div>
            <div className="w-10 h-10 rounded-full bg-crema/10 hover:bg-verde-monte transition-colors cursor-pointer flex items-center justify-center text-crema text-xs">IN</div>
            <div className="w-10 h-10 rounded-full bg-crema/10 hover:bg-verde-monte transition-colors cursor-pointer flex items-center justify-center text-crema text-xs">X</div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-[1400px] mt-16 pt-8 border-t border-crema/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-crema/50 font-sans text-xs">
          © {new Date().getFullYear()} Asociación Civil Desarrollo i. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}