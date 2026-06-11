// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Páginas
import Landing from './pages/Landing';
import DatosAbiertos from './pages/DatosAbiertos';
import PuntosMoviles from './pages/PuntosMoviles';
import Guardianes from './pages/Guardianes';
import Arbin from './pages/Arbin';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* El Navbar queda siempre arriba */}
        <Navbar />
        
        {/* El contenedor principal crece para empujar el Footer hacia abajo */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/datos-abiertos" element={<DatosAbiertos />} />
            <Route path="/puntos-moviles" element={<PuntosMoviles />} />
            <Route path="/guardianes" element={<Guardianes />} />
            <Route path="/arbin" element={<Arbin />} />
          </Routes>
        </main>

        {/* El Footer queda siempre al final */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;