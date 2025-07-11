import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Productos.css';

function Productos({ addToCart }) {
    const productos = [
        {
            nombre: "Amigurumi 1",
            precio: 10,
            descripcion: "Amigurumi hecho a mano, con lana de alta calidad.",
            disponible: true,
            imagen: "images/productos/ami1.jpg",
        },
        // ...agrega más productos aquí...
    ];

    const [modal, setModal] = useState({ abierto: false, producto: null, cantidad: 1 });

    const abrirModal = (producto) => {
        // Limpiamos cualquier cantidad previa al abrir el modal
        setModal({ abierto: true, producto, cantidad: 1 });
    };

    const cerrarModal = () => {
        setModal({ abierto: false, producto: null, cantidad: 1 });
    };

    const handleCantidad = (e) => {
        const value = Math.max(1, Math.min(99, Number(e.target.value)));
        setModal((m) => ({ ...m, cantidad: value }));
    };

    const handleAddToCart = () => {
        // Creamos un nuevo objeto sin la propiedad cantidad del producto original
        const { cantidad, ...productoSinCantidad } = modal.producto;
        addToCart({
            ...productoSinCantidad,
            cantidad: modal.cantidad
        });
        cerrarModal();
    };

    return (
        <div className="productos" id="productos">
            <h2>Productos Disponibles</h2>
            <div className="productos-lista">
                {productos.map((producto, index) => (
                    <div className="producto" key={index} onClick={() => abrirModal(producto)}>
                        <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
                        <h3>{producto.nombre}</h3>
                        <p>${producto.precio}</p>
                    </div>
                ))}
            </div>

            {modal.abierto && (
                <div className="modal" onClick={cerrarModal}>
                    <div className="modal-content modal-row" onClick={e => e.stopPropagation()}>
                        <div className="modal-img-side">
                            <img src={modal.producto.imagen} alt={modal.producto.nombre} className="producto-imagen" />
                        </div>
                        <div className="modal-info-side">
                            <h3>{modal.producto.nombre}</h3>
                            <p className="modal-precio">${modal.producto.precio}</p>
                            <p className="modal-descripcion">{modal.producto.descripcion}</p>
                            <div style={{ margin: '10px 0' }}>
                                <label>
                                    Cantidad:&nbsp;
                                    <input
                                        type="number"
                                        min="1"
                                        max="99"
                                        value={modal.cantidad}
                                        onChange={handleCantidad}
                                        style={{ width: 50, textAlign: 'center' }}
                                    />
                                </label>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="add-to-cart-btn"
                                style={{ marginTop: 10 }}
                                disabled={!modal.producto.disponible}
                            >
                                <FaShoppingCart size={18} /> Añadir al carrito
                            </button>
                            {!modal.producto.disponible && (
                                <p className="no-disponible">No disponible</p>
                            )}
                            <button onClick={cerrarModal} className="cerrar-modal-btn" style={{ marginTop: 15 }}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Productos;