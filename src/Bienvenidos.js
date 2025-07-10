import React from 'react';
import './Bienvenidos.css';

function Bienvenidos() {
    return (
        <div className="bienvenidos" id="bienvenidos">
            {/* Sección con detalles o filosofía */}
            <div className="filosofia">
                <h2>Hecho con amor, para ti</h2>
                <p>En WoolLover, cada amigurumi es una obra de arte única, tejida con paciencia y dedicación. Nos enorgullece crear productos que no solo son adorables, sino que están hechos para durar.</p>
            </div>

            {/* Galería de productos */}
            <div className="galeria">
                <h2>Explora nuestras creaciones</h2>
                <div className="imagenes">
                    <img src="images/bienvenidos/ree1.jpg" alt="Amigurumi 1" />
                    <img src="images/bienvenidos/ree2.jpg" alt="Amigurumi 2" />
                    <img src="images/bienvenidos/ree3.jpg" alt="Amigurumi 3" />
                    <img src="images/bienvenidos/ree4.jpg" alt="Amigurumi 4" />
                    <img src="images/bienvenidos/ree5.jpg" alt="Amigurumi 5" />
                    <img src="images/bienvenidos/ree6.jpg" alt="Amigurumi 6" />
                </div>
            </div>

            {/* Testimonios (si los tienes) */}
            <div className="testimonios">
                <h2>Lo que dicen nuestros clientes</h2>
                <blockquote>"¡Los amigurumis de WoolLover son simplemente perfectos! Me encantan los detalles y la calidad de cada pieza."</blockquote>
                <p>- Cliente Satisfecho</p>
            </div>

            {/* Botón de acción */}
            <div className="cta">
                <button onClick={() => window.location.href = "#productos"}>Descubre nuestros productos</button>
            </div>
        </div>
    );
}

export default Bienvenidos;
