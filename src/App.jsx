import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Carrusel from './Carrusel';
import Bienvenidos from './Bienvenidos';
import Productos from './Productos';
import Contacto from './Contacto';
import Carrito from './Carrito';
import Login from './Login';
import Register from './Register';

import './App.css';
import './Auth.css';

export default function App() {
  const [user, setUser] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Si hay token, lo fijamos en axios
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, []);

  // Abrir/cerrar modales
  const abrirLogin = () => setLoginOpen(true);
  const cerrarLogin = () => setLoginOpen(false);
  const abrirRegister = () => setRegisterOpen(true);
  const cerrarRegister = () => setRegisterOpen(false);
  const abrirCart = () => setCartOpen(true);
  const cerrarCart = () => setCartOpen(false);

  // Flujos auth
  const handleRegistered = () => {
    cerrarRegister();
    abrirLogin();
  };
  const handleLoginSuccess = userData => {
    setUser(userData);
    cerrarLogin();
  };

  // Carrito
  const addToCart = product => {
    setCartItems(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, cantidad: p.cantidad + (product.cantidad || 1) }
            : p
        );
      }
      return [...prev, { ...product, cantidad: product.cantidad || 1 }];
    });
  };
  const totalCantidad = cartItems.reduce((a, p) => a + p.cantidad, 0);
  const totalCarrito = cartItems.reduce((a, p) => a + (p.price || 0) * p.cantidad, 0);

  return (
    <div className="App">
      <Navbar
        user={user}
        cantidad={totalCantidad}
        onAbrirCarrito={abrirCart}
        onLoginClick={abrirLogin}
      />

      <div id="inicio"><Carrusel /></div>
      <div id="bienvenidos"><Bienvenidos /></div>
      <div id="productos"><Productos addToCart={addToCart} /></div>
      <div id="contacto"><Contacto /></div>

      <Carrito
        mostrarCarrito={cartOpen}
        onCerrar={cerrarCart}
        productos={cartItems}
        totalCarrito={totalCarrito}
      />

      {loginOpen && (
        <div className="modal-overlay" onClick={cerrarLogin}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <Login
              onLogin={handleLoginSuccess}
              switchToRegister={() => {
                cerrarLogin();
                abrirRegister();
              }}
            />
          </div>
        </div>
      )}

      {registerOpen && (
        <div className="modal-overlay" onClick={cerrarRegister}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <Register
              onRegistered={handleRegistered}
              switchToLogin={() => {
                cerrarRegister();
                abrirLogin();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
