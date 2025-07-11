// src/Contacto.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './Contacto.css';

function Contacto() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        e.target.reset();
    };

    return (
        <div className="contacto" id="contacto">
            <div className="contacto-container">
                <div className="contacto-info">
                    <h2>Contáctanos</h2>
                    <p>¿Tienes preguntas sobre nuestros productos? ¡Escríbenos!</p>

                    <div className="redes-sociales">
                        <a href="https://facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="icono" />
                        </a>
                        <a href="https://instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icono" />
                        </a>
                        <a href="https://tiktok.com/@tuempresa" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="icono" />
                        </a>
                        <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="icono whatsapp" />
                        </a>
                    </div>

                    <div className="contacto-directo">
                        <p><strong>Email:</strong> info@woollover.com</p>
                        <p><strong>Teléfono:</strong> +51 987 654 321</p>
                    </div>
                </div>

                <form className="contacto-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Nombre completo" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Correo electrónico" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Teléfono (opcional)" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Tu mensaje..." required></textarea>
                    </div>
                    <button type="submit" className="enviar-btn">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;