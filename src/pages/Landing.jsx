// src/pages/Landing.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Manifesto from '../components/Manifesto';
import NuestrosTrabajos from '../components/NuestrosTrabajos';
import Voluntariado from '../components/Voluntariado';

export default function Landing() {
  return (
    <div className="bg-crema min-h-screen selection:bg-amarillo/30">
      {/* 1. Portada con las tomas cinemáticas */}
      <HeroSection />
      
      {/* 2. Declaración de impacto (Misión/Visión/Objetivos integrados) */}
      <Manifesto />
      
      {/* 3. La grilla estilo Sylvera con los 8 proyectos del instituto */}
      {/* ACÁ AGREGAMOS EL ID PARA EL SCROLL */}
      <div id="trabajos">
        <NuestrosTrabajos />
      </div>
      
      {/* 4. Bloque terracota/verde para llamado a la acción comunitaria */}
      {/* ACÁ AGREGAMOS EL ID PARA EL SCROLL */}
      <div id="voluntariado">
        <Voluntariado />
      </div>
    </div>
  );
}