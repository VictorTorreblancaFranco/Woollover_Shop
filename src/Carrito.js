import React from 'react';
import './Carrito.css';

function Carrito({ mostrarCarrito, onCerrar }) {
    const productos = [
        { nombre: 'Amigurumi 1', precio: 10 },
        { nombre: 'Amigurumi 2', precio: 12 },
    ];

    const total = productos.reduce((acc, producto) => acc + producto.precio, 0);

    if (!mostrarCarrito) return null;

    return (
        <div className="carrito-modal-overlay" onClick={onCerrar}>
            <div
                className="carrito-modal"
                onClick={e => e.stopPropagation()} // Evita cerrar al hacer click dentro del modal
            >
                <button
                    className="carrito-cerrar"
                    onClick={onCerrar}
                    aria-label="Cerrar carrito"
                >
                    ×
                </button>
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
        </div>
    );
}

export default Carrito;