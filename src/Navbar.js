// src/Navbar.js
import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'; // Importa los iconos de carrito e inicio de sesión
import './Navbar.css';

function Navbar({ onCarritoClick, onLoginClick }) {
    return (
        <nav className="navbar">
            <ul className="navbar-left">
                <li><a href="#bienvenidos">Bienvenidos</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>

            <ul className="navbar-right">
                {/* Icono de carrito */}
                <li>
                    <a href="#carrito" className="carrito-icon" onClick={onCarritoClick}>
                        <FaShoppingCart size={30} color="black" />
                    </a>
                </li>
                {/* Icono de inicio de sesión (aún sin función) */}
                <li>
                    <a href="#login" className="login-icon" onClick={onLoginClick}>
                        <FaUserCircle size={30} color="black" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
