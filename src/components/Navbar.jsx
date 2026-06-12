import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  {
    name: "Nuestros trabajos",
    path: "/#trabajos",
    hashId: "trabajos",
    isHash: true,
  },
  {
    name: "Voluntariado",
    path: "/#voluntariado",
    hashId: "voluntariado",
    isHash: true,
  },
   { name: "Guardianes de la Casa Común", path: "/guardianes", isHash: false }
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para saber qué sección con "#" estamos viendo
  const [activeHash, setActiveHash] = useState("");

  // 1. EFECTO PARA DETECTAR EL SCROLL AUTOMÁTICO
  useEffect(() => {
    // Solo hacemos el tracking si estamos en la página principal
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const handleScroll = () => {
      const trabajosEl = document.getElementById("trabajos");
      const voluntariadoEl = document.getElementById("voluntariado");

      // Le sumamos 200px para que la barrita se active un poquito antes de llegar
      const scrollPosition = window.scrollY + 200;

      if (voluntariadoEl && scrollPosition >= voluntariadoEl.offsetTop) {
        setActiveHash("voluntariado");
      } else if (trabajosEl && scrollPosition >= trabajosEl.offsetTop) {
        setActiveHash("trabajos");
      } else {
        // Si estamos arriba de todo, no hay hash activo (se marca "Inicio")
        setActiveHash("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Chequeo inicial al cargar la página

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // 2. FUNCIÓN PARA EL CLIC Y SCROLL SUAVE
  const handleHashClick = (e, hashId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (pathname !== "/") {
      // Si estamos en otra página (ej: Guardianes), vamos a la Home y al hash
      navigate(`/#${hashId}`);
      return;
    }

    // Si ya estamos en la Home, bajamos con scroll suave
    const element = document.getElementById(hashId);
    if (element) {
      const headerOffset = 100; // El espacio que ocupa la barra fija
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 3. FUNCIÓN PARA SABER QUÉ LINK SUBRAYAR
  const isLinkActive = (link) => {
    if (link.isHash) {
      return pathname === "/" && activeHash === link.hashId;
    }
    if (link.path === "/") {
      // "Inicio" solo se subraya si estamos en "/" y no bajamos a otra sección
      return pathname === "/" && activeHash === "";
    }
    return pathname === link.path;
  };

  return (
    <header className="bg-crema sticky top-0 z-50 border-b border-azul-noche/10 shadow-sm">
      <nav
        className="mx-auto flex items-center justify-between max-w-[1400px] p-4 lg:py-2 lg:px-8 h-20 md:h-24 lg:h-28"
        aria-label="Global"
      >
        {/* LOGO */}
        <div className="flex">
          <Link to="/" className="-m-1.5 p-1.5 group flex items-center">
            <img
              src="/03_isotipo_color.png"
              alt="Isotipo Desarrollo i"
              className="h-10 w-auto lg:hidden"
            />
            <img
              src="/02_logo_horizontal_color.png"
              alt="Logo Desarrollo i"
              className="hidden lg:block h-12 lg:h-14 xl:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-azul-noche"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden lg:flex lg:justify-end items-center gap-4 xl:gap-5">
          {navLinks.map((link, index) => {
            const isLast = index === navLinks.length - 1;
            const active = isLinkActive(link);

            const linkContent = (
              <span className="relative pb-1">
                {link.name}
                {/* La barrita ahora reacciona al estado 'active' */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-terracota transition-all duration-300 ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
                ></span>
              </span>
            );

            return (
              <React.Fragment key={link.name}>
                {link.isHash ? (
                  <a
                    href={link.path}
                    onClick={(e) => handleHashClick(e, link.hashId)}
                    className={`font-sans text-[11px] xl:text-xs font-bold uppercase tracking-[0.1em] hover:text-terracota transition-colors duration-300 ${active ? "text-azul-noche" : "text-azul-noche/60"}`}
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-sans text-[11px] xl:text-xs font-bold uppercase tracking-[0.1em] hover:text-terracota transition-colors duration-300 ${active ? "text-azul-noche" : "text-azul-noche/60"}`}
                  >
                    {linkContent}
                  </Link>
                )}

                {!isLast && (
                  <span className="text-azul-noche/30 select-none pb-1">|</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isMenuOpen && (
        <div className="lg:hidden bg-crema border-t border-azul-noche/10 px-6 py-4 flex flex-col gap-4 shadow-xl absolute w-full z-50">
          {navLinks.map((link) =>
            link.isHash ? (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleHashClick(e, link.hashId)}
                className={`font-sans text-sm font-bold uppercase tracking-widest p-2 border-b border-azul-noche/5 ${isLinkActive(link) ? "text-terracota" : "text-azul-noche"}`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-sans text-sm font-bold uppercase tracking-widest p-2 border-b border-azul-noche/5 ${isLinkActive(link) ? "text-terracota" : "text-azul-noche"}`}
              >
                {link.name}
              </Link>
            ),
          )}
        </div>
      )}
    </header>
  );
}
