import React from 'react';
import { Link } from 'react-router-dom';

// ICONOS SVG INSTITUCIONALES (Extraídos de las marcas oficiales)
const IconInstagram = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const IconLinkedin = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-crema py-20 px-6 lg:px-8 border-t border-azul-noche/10">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        
        {/* Columna 1: Marca institucional y logo ampliado */}
        <div>
          <Link to="/" className="mb-6 block w-fit group">
            <img 
              src="/02_logo_horizontal_color.png" 
              alt="Logo Desarrollo i" 
              // Aumento de tamaño significativo del logo
              className="h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          <p className="text-azul-noche/80 font-serif italic text-xl max-w-sm mb-3 mt-8">
            Entre el conocimiento y el territorio.
          </p>
        </div>
        
        {/* Columna 2: Navegación Institucional */}
        <div className="flex flex-col gap-5 font-sans pt-4 md:pt-10">
          <h3 className="text-terracota font-bold tracking-[0.2em] uppercase text-xs mb-3">Nuestros Ejes</h3>
          <Link to="/guardianes" className="text-azul-noche/70 hover:text-terracota font-bold text-sm transition-colors w-fit">Guardianes de la Casa Común</Link>
          <Link to="/arbin" className="text-azul-noche/70 hover:text-terracota font-bold text-sm transition-colors w-fit">Arbin: Arbolado Inteligente</Link>
          <Link to="/datos-abiertos" className="text-azul-noche/70 hover:text-terracota font-bold text-sm transition-colors w-fit">Catálogo de Datos Abiertos</Link>
          <Link to="/puntos-moviles" className="text-azul-noche/70 hover:text-terracota font-bold text-sm transition-colors w-fit">Caso: Puntos Verdes Móviles</Link>
        </div>

        {/* Columna 3: Contacto y Redes con iconos reales */}
        <div className="flex flex-col gap-5 font-sans pt-4 md:pt-10">
          <h3 className="text-verde-monte font-bold tracking-[0.2em] uppercase text-xs mb-3">Contacto</h3>
          <a href="mailto:info@desarrolloi.org" className="text-azul-noche font-bold hover:text-verde-monte text-sm transition-colors w-fit">
            info@desarrolloi.org
          </a>
          <div className="mt-6 flex gap-6 items-center">
            {/* Redes Sociales - Iconos SVG reales y responsivos */}
            <a 
              href="https://www.instagram.com/desarrolloi?igsh=MTlocnIycjltbTVmYg==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-azul-noche hover:text-terracota transition-all duration-300 hover:scale-110 flex items-center justify-center p-1"
              aria-label="Seguinos en Instagram"
            >
              <IconInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/company/desarrolloi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-azul-noche hover:text-terracota transition-all duration-300 hover:scale-110 flex items-center justify-center p-1"
              aria-label="Seguinos en LinkedIn"
            >
              <IconLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Línea de Copyright */}
      <div className="mx-auto max-w-[1400px] mt-20 pt-10 border-t border-azul-noche/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-azul-noche/50 font-sans text-xs tracking-wide font-bold text-center md:text-left">
          © {new Date().getFullYear()} Desarrollo i. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}