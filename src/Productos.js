// src/Productos.js
import React from 'react';
import './Productos.css';

function Productos() {
    return (
        <div className="productos" id="productos"> {/* Añadimos el id para navegación */}
            <h2>Productos Disponibles</h2>
            <div className="productos-lista">
                <div className="producto">
                    <h3>Amigurumi 1</h3>
                    <p>$10</p>
                </div>
                <div className="producto">
                    <h3>Amigurumi 2</h3>
                    <p>$12</p>
                </div>
            </div>
        </div>
    );
}

export default Productos;
