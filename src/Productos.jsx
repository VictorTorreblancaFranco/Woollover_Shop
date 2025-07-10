import React from 'react';
import './Productos.css';

function Productos({ addToCart }) {
    const productos = [
        { nombre: 'Amigurumi 1', precio: 10 },
        { nombre: 'Amigurumi 2', precio: 12 },
    ];

    return (
        <div className="productos" id="productos">
            <h2>Productos Disponibles</h2>
            <div className="productos-lista">
                {productos.map((producto, index) => (
                    <div className="producto" key={index}>
                        <h3>{producto.nombre}</h3>
                        <p>${producto.precio}</p>
                        <button onClick={() => addToCart(producto)}>Añadir al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;
