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
      <NuestrosTrabajos />
      
      {/* 4. Bloque terracota para llamado a la acción comunitaria */}
      <Voluntariado />
    </div>
  );
}