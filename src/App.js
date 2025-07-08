// src/App.js
import React from 'react';
import Navbar from './Navbar';
import Carrusel from './Carrusel';
import Bienvenidos from './Bienvenidos';
import Productos from './Productos';
import Contacto from './Contacto';
import Carrito from './Carrito';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="bienvenidos">
        {/* Carrusel solo en la sección de Bienvenidos */}
        <Carrusel />
      </div>

      {/* Barra de navegación fija */}
      <Navbar />

      {/* Sección de Bienvenidos */}
      <Bienvenidos />

      {/* Sección de Productos */}
      <Productos />

      {/* Sección de Contacto */}
      <Contacto />

      {/* Carrito de compras como icono */}
      <Carrito />
    </div>
  );
}

export default App;
