import React, { useState } from 'react';
import Navbar from './Navbar';
import Carrusel from './Carrusel';
import Bienvenidos from './Bienvenidos';
import Productos from './Productos';
import Contacto from './Contacto';
import Carrito from './Carrito';
import './App.css';

function App() {
  // Estado para controlar la visibilidad del carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Estado para almacenar los productos del carrito
  const [productos, setProductos] = useState([]);

  // Función para abrir y cerrar el carrito
  const abrirCarrito = () => setMostrarCarrito(true);
  const cerrarCarrito = () => setMostrarCarrito(false);

  // Función para añadir productos al carrito
  const addToCart = (producto) => {
    setProductos((prev) => {
      // Buscar si el producto ya existe en el carrito
      const existente = prev.find((p) => p.id === producto.id);

      if (existente) {
        // Si el producto ya existe, actualizar la cantidad
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + producto.cantidad }
            : p
        );
      } else {
        // Si no existe, agregar el producto al carrito
        return [...prev, { ...producto, cantidad: producto.cantidad || 1 }];
      }
    });
  };

  // Calcular la cantidad total de productos en el carrito
  const totalCantidad = productos.reduce((acc, p) => acc + p.cantidad, 0);

  // Calcular el total del carrito (precio * cantidad de cada producto)
  const totalCarrito = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="App">
      {/* Carrusel */}
      <div id="inicio">
        <Carrusel />
      </div>

      {/* Navbar con la cantidad total de productos en el carrito */}
      <Navbar
        onAbrirCarrito={abrirCarrito}
        cantidad={totalCantidad}
      />

      {/* Sección de Bienvenidos */}
      <div id="bienvenidos">
        <Bienvenidos />
      </div>

      {/* Sección de Productos */}
      <div id="productos">
        <Productos addToCart={addToCart} />
      </div>

      {/* Sección de Contacto */}
      <div id="contacto">
        <Contacto />
      </div>

      {/* Carrito de compras */}
      <Carrito
        mostrarCarrito={mostrarCarrito}
        onCerrar={cerrarCarrito}
        productos={productos}
        totalCarrito={totalCarrito} // Pasamos el total calculado al carrito
      />
    </div>
  );
}

export default App;
