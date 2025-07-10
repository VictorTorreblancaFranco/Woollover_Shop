import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ onAbrirCarrito, cantidad }) {
    return (
        <nav className="navbar">
            <ul className="navbar-left">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#bienvenidos">Bienvenidos</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#contacto">Contactanos</a></li>
            </ul>
            <ul className="navbar-right">
                <li>
                    <button
                        className="carrito-icon"
                        onClick={onAbrirCarrito}
                        style={{ background: 'none', border: 'none', padding: 0 }}
                        aria-label="Abrir carrito"
                    >
                        <FaShoppingCart size={25} color="black" />
                        {cantidad > 0 && <span className="carrito-cantidad">{cantidad}</span>} {/* Muestra la cantidad */}
                    </button>
                </li>
                <li>
                    <a href="#login" className="login-icon">
                        <FaUserCircle size={25} color="black" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
