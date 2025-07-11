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
  const [productos, setProductos] = useState([]); // Lista de productos en el carrito

  const abrirCarrito = () => setMostrarCarrito(true);
  const cerrarCarrito = () => setMostrarCarrito(false);

  // Añade productos al carrito, sumando cantidad si ya existe
  const addToCart = (producto) => {
    setProductos(prev => {
      const existente = prev.find(p => p.nombre === producto.nombre);
      if (existente) {
        return prev.map(p =>
          p.nombre === producto.nombre
            ? { ...p, cantidad: p.cantidad + producto.cantidad }
            : p
        );
      } else {
        return [...prev, { ...producto }];
      }
    });
  };

  // Suma total de productos en el carrito (para mostrar en el icono)
  const totalCantidad = productos.reduce((acc, p) => acc + (p.cantidad || 1), 0);

  return (
    <div className="App">
      <div id="inicio">
        <Carrusel />
      </div>
      <Navbar
        onAbrirCarrito={abrirCarrito}
        cantidad={totalCantidad}
      />
      <div id="bienvenidos">
        <Bienvenidos />
      </div>
      <div id="productos">
        <Productos addToCart={addToCart} />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
      <Carrito
        mostrarCarrito={mostrarCarrito}
        onCerrar={cerrarCarrito}
        productos={productos}
      />
    </div>
  );
}

export default App;