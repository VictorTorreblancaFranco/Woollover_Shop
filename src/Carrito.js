// src/Carrito.js
import React from 'react';
import './Carrito.css';

function Carrito({ mostrarCarrito }) {
    const productos = [
        { nombre: 'Amigurumi 1', precio: 10 },
        { nombre: 'Amigurumi 2', precio: 12 },
    ];

    const total = productos.reduce((acc, producto) => acc + producto.precio, 0);

    return (
        <div>
            {/* Solo muestra el carrito si mostrarCarrito es true */}
            {mostrarCarrito && (
                <div className="carrito-panel">
                    <h2>Carrito de Compras</h2>
                    <ul>
                        {productos.map((producto, index) => (
                            <li key={index}>
                                {producto.nombre} - ${producto.precio}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total}</h3>
                    <button onClick={() => alert("¡Compra realizada!")}>Finalizar compra</button>
                </div>
            )}
        </div>
    );
}

export default Carrito;
