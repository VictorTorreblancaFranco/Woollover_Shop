import React, { useState } from 'react';
import Navbar from './Navbar'; // Barra de navegación
import Carrusel from './Carrusel'; // Carrusel en la sección de Bienvenidos
import Bienvenidos from './Bienvenidos'; // Sección Bienvenidos
import Productos from './Productos'; // Sección Productos
import Contacto from './Contacto'; // Sección Contacto
import Carrito from './Carrito'; // Icono del carrito
import './App.css';

function App() {
  // Estado para controlar si el carrito se muestra o no
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [productos, setProductos] = useState([]); // Lista de productos en el carrito

  // Función para abrir el carrito
  const abrirCarrito = () => {
    setMostrarCarrito(true);
  };

  // Función para cerrar el carrito
  const cerrarCarrito = () => {
    setMostrarCarrito(false);
  };

  // Función para añadir productos al carrito
  const addToCart = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <div className="App">
      {/* Carrusel en la sección de Bienvenidos */}
      <div id="inicio">
        <Carrusel />
      </div>

      {/* Barra de navegación fija */}
      <Navbar
        onAbrirCarrito={abrirCarrito} // Pasa la función para abrir el carrito
        cantidad={productos.length} // Pasa la cantidad de productos al Navbar
      />

      {/* Sección de Bienvenidos */}
      <div id="bienvenidos">
        <Bienvenidos />
      </div>

      {/* Sección de Productos */}
      <div id="productos">
        <Productos addToCart={addToCart} /> {/* Pasa la función addToCart a los productos */}
      </div>

      {/* Sección de Contacto */}
      <div id="contacto">
        <Contacto />
      </div>

      {/* Carrito de compras */}
      <Carrito
        mostrarCarrito={mostrarCarrito}
        onCerrar={cerrarCarrito}
        productos={productos} // Pasa los productos al componente Carrito
      />
    </div>
  );
}

export default App;
