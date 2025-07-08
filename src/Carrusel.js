// src/Carrusel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import './Carrusel.css'; // Los estilos del carrusel

function Carrusel() {
    return (
        <div className="carrusel-container">
            <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showThumbs={false}
                showStatus={false}
                dynamicHeight={false}
            >
                <div>
                    <img src="images/portada/portada1.jpg" alt="Amigurumi 1" />
                </div>
                <div>
                    <img src="images/portada/portada2.jpg" alt="Amigurumi 2" />
                </div>
                <div>
                    <img src="images/portada/portada3.jpg" alt="Amigurumi 3" />
                </div>
            </Carousel>
            <div className="frase-container">
                <h1>Bienvenidos a WoolLover</h1>
                <p>Amigurumis hechos artesanalmente con lana</p>
            </div>
        </div>
    );
}

export default Carrusel;
