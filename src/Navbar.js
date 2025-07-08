import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';  // Iconos de carrito e inicio de sesión
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-left">
                {/* Enlaces de navegación a las secciones con anclas */}
                <li><a href="#inicio">Inicio</a></li>  {/* Enlace al carrusel */}
                <li><a href="#bienvenidos">Bienvenidos</a></li>  {/* Enlace a la sección Bienvenidos */}
                <li><a href="#productos">Productos</a></li>  {/* Enlace a la sección Productos */}
                <li><a href="#contacto">Contactanos</a></li>  {/* Enlace a la sección Contacto */}
            </ul>

            <ul className="navbar-right">
                {/* Icono de carrito */}
                <li>
                    <a href="#carrito" className="carrito-icon">
                        <FaShoppingCart size={25} color="black" />
                    </a>
                </li>
                {/* Icono de inicio de sesión */}
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
