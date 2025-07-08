// src/Bienvenidos.js
import React from 'react';
import './Bienvenidos.css';

function Bienvenidos() {
    return (
        <div className="bienvenidos" id="bienvenidos"> {/* Añadimos el id para navegación */}
            <h1>Bienvenidos a WoolLover</h1>
            <p>Amigurumis hechos artesanalmente con lana.</p>
        </div>
    );
}

export default Bienvenidos;
