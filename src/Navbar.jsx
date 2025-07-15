import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ user, cantidad, onAbrirCarrito, onLoginClick }) {
    return (
        <nav className="navbar">
            <ul className="navbar-left">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#bienvenidos">Bienvenidos</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#contacto">Contáctanos</a></li>
            </ul>
            <ul className="navbar-right">
                <li>
                    <button
                        className="carrito-icon"
                        onClick={onAbrirCarrito}
                        aria-label="Abrir carrito"
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    >
                        <FaShoppingCart size={25} />
                        {cantidad > 0 && <span className="carrito-cantidad">{cantidad}</span>}
                    </button>
                </li>
                <li>
                    <button
                        className="login-icon"
                        onClick={onLoginClick}
                        aria-label={user ? 'Perfil' : 'Iniciar sesión'}
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    >
                        <FaUserCircle size={25} />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
