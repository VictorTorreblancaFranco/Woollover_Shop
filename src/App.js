import React, { useState } from 'react';
import Navbar from './Navbar';
import Carrusel from './Carrusel';
import Bienvenidos from './Bienvenidos';
import Productos from './Productos';
import Contacto from './Contacto';
import Carrito from './Carrito';
import './App.css';

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <div className="App">
      <div id="inicio">
        <Carrusel />
      </div>
      <Navbar onAbrirCarrito={() => setMostrarCarrito(true)} />
      <div id="bienvenidos">
        <Bienvenidos />
      </div>
      <div id="productos">
        <Productos />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
      <Carrito
        mostrarCarrito={mostrarCarrito}
        onCerrar={() => setMostrarCarrito(false)}
      />
    </div>
  );
}

export default App;