// src/Productos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import './Productos.css';

function Productos({ addToCart }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const formatPrice = (price) =>
        new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
            minimumFractionDigits: 2
        })
            .format(price)
            .replace('PEN', 'S/');

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/products');
            const mapped = data.map((p) => ({
                ...p,
                available: p.status === 'D',
            }));
            setProductos(mapped);
        } catch (err) {
            console.error('Error al obtener los productos', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const [modal, setModal] = useState({ abierto: false, producto: null, cantidad: 1 });

    const abrirModal = (producto) => setModal({ abierto: true, producto, cantidad: 1 });
    const cerrarModal = () => setModal({ abierto: false, producto: null, cantidad: 1 });
    const handleCantidad = (e) => {
        const v = Math.max(1, Math.min(99, Number(e.target.value)));
        setModal((m) => ({ ...m, cantidad: v }));
    };
    const handleAddToCart = () => {
        addToCart({ ...modal.producto, cantidad: modal.cantidad });
        cerrarModal();
    };

    return (
        <div className="productos" id="productos">
            <h2>Productos Disponibles</h2>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className="productos-lista">
                    {productos.map((producto) => (
                        <div
                            className="producto"
                            key={producto.id}
                            onClick={() => abrirModal(producto)}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/${producto.image}`}
                                alt={producto.name}
                                className="producto-imagen"
                            />
                            <h3>{producto.name}</h3>
                            <p>{formatPrice(producto.price)}</p>
                            <button
                                className="add-to-cart-btn"
                                disabled={!producto.available}
                            >
                                <FaShoppingCart size={18} /> Añadir al carrito
                            </button>
                            {!producto.available && (
                                <p className="no-disponible">No disponible</p>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {modal.abierto && (
                <div className="modal" onClick={cerrarModal}>
                    <div
                        className="modal-content modal-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-img-side">
                            <img
                                src={`${process.env.PUBLIC_URL}/${modal.producto.image}`}
                                alt={modal.producto.name}
                                className="producto-imagen"
                            />
                        </div>
                        <div className="modal-info-side">
                            <h3>{modal.producto.name}</h3>
                            <p className="modal-precio">{formatPrice(modal.producto.price)}</p>
                            <p className="modal-descripcion">
                                {modal.producto.description}
                            </p>
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
                                disabled={!modal.producto.available}
                                style={{ marginTop: 10 }}
                            >
                                <FaShoppingCart size={18} /> Añadir al carrito
                            </button>
                            {!modal.producto.available && (
                                <p className="no-disponible">No disponible</p>
                            )}
                            <button
                                onClick={cerrarModal}
                                className="cerrar-modal-btn"
                                style={{ marginTop: 15 }}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Productos;
