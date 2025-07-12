// src/Carrito.jsx
import React from 'react';
import './Carrito.css';

function Carrito({ mostrarCarrito, onCerrar, productos }) {
    if (!mostrarCarrito) return null;

    const formatPrice = (price) =>
        new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
            minimumFractionDigits: 2
        })
            .format(price)
            .replace('PEN', 'S/');

    // Total general del carrito
    const total = productos.reduce((sum, p) => {
        const precio = typeof p.price === 'number' ? p.price : 0;
        const cantidad = typeof p.cantidad === 'number' ? p.cantidad : 1;
        return sum + precio * cantidad;
    }, 0);

    return (
        <div className="carrito-modal-overlay" onClick={onCerrar}>
            <div className="carrito-modal" onClick={e => e.stopPropagation()}>
                <button className="carrito-cerrar" onClick={onCerrar} aria-label="Cerrar carrito">×</button>
                <h2>Carrito de Compras</h2>

                <ul className="carrito-lista">
                    {productos.length === 0 ? (
                        <li className="sin-productos">No hay productos en el carrito.</li>
                    ) : (
                        productos.map((p, i) => {
                            const precio = typeof p.price === 'number' ? p.price : 0;
                            const cantidad = typeof p.cantidad === 'number' ? p.cantidad : 1;
                            const totalProducto = precio * cantidad;
                            return (
                                <li key={i} className="producto-carrito">
                                    <div className="producto-info">
                                        <span className="producto-nombre">{p.name}</span>
                                        <span className="producto-cantidad">{`x${cantidad} ${formatPrice(precio)}`}</span>
                                    </div>
                                    <div className="producto-total">{formatPrice(totalProducto)}</div>
                                </li>
                            );
                        })
                    )}
                </ul>

                <div className="total-carrito">
                    <span>Total:</span>
                    <span>{formatPrice(total)}</span>
                </div>

                {productos.length > 0 && (
                    <button onClick={() => alert('¡Compra realizada!')} className="finalizar-compra-btn">
                        Finalizar compra
                    </button>
                )}
            </div>
        </div>
    );
}

export default Carrito;
