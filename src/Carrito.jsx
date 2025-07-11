import React from 'react';
import './Carrito.css';

function Carrito({ mostrarCarrito, onCerrar, productos }) {
    // Calcula el total sumando precio * cantidad
    const total = productos.reduce((acc, producto) => acc + producto.precio * (producto.cantidad || 1), 0);

    if (!mostrarCarrito) return null;

    return (
        <div className="carrito-modal-overlay" onClick={onCerrar}>
            <div className="carrito-modal" onClick={(e) => e.stopPropagation()}>
                <button className="carrito-cerrar" onClick={onCerrar} aria-label="Cerrar carrito">×</button>
                <h2>Carrito de Compras</h2>
                <ul>
                    {productos.length === 0 ? (
                        <li>No hay productos en el carrito.</li>
                    ) : (
                        productos.map((producto, index) => (
                            <li key={index}>
                                {producto.nombre} - ${producto.precio} x {producto.cantidad || 1}
                            </li>
                        ))
                    )}
                </ul>
                <h3>Total: ${total}</h3>
                <button onClick={() => alert("¡Compra realizada!")}>Finalizar compra</button>
            </div>
        </div>
    );
}

export default Carrito;