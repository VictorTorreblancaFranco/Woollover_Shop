import React from 'react';
import Navbar from './Navbar';  // Barra de navegación
import Carrusel from './Carrusel';  // Carrusel en la sección de Bienvenidos
import Bienvenidos from './Bienvenidos';  // Sección Bienvenidos
import Productos from './Productos';  // Sección Productos
import Contacto from './Contacto';  // Sección Contacto
import Carrito from './Carrito';  // Icono del carrito
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Carrusel en la sección de Bienvenidos */}
      <div id="inicio">
        <Carrusel />
      </div>

      {/* Barra de navegación fija */}
      <Navbar />

      {/* Sección de Bienvenidos */}
      <div id="bienvenidos">
        <Bienvenidos />
      </div>

      {/* Sección de Productos */}
      <div id="productos">
        <Productos />
      </div>

      {/* Sección de Contacto */}
      <div id="contacto">
        <Contacto />
      </div>

      {/* Carrito de compras como icono */}
      <Carrito />
    </div>
  );
}

export default App;
