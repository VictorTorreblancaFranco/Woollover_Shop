// src/Productos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import './Productos.css';

function Productos({ addToCart }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Función para formatear precios en Soles Peruanos
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
            minimumFractionDigits: 2
        }).format(price).replace('PEN', 'S/');
    };

    // Función para obtener los productos desde el backend
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');

            // Mapear los productos y asignarles el campo `available` basado en `status`
            const productosConDisponibilidad = response.data.map(producto => ({
                ...producto,
                available: producto.status === 'D' // Solo 'D' significa disponible
            }));

            setProductos(productosConDisponibilidad); // Actualizamos el estado con los productos obtenidos
        } catch (error) {
            console.error("Error al obtener los productos", error);
        } finally {
            setLoading(false); // Dejar de mostrar el cargando
        }
    };

    useEffect(() => {
        fetchProducts(); // Llamamos a la función para obtener los productos cuando el componente se monta
    }, []);

    const [modal, setModal] = useState({ abierto: false, producto: null, cantidad: 1 });

    const abrirModal = (producto) => {
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
            {loading ? (
                <p>Cargando productos...</p> // Mostrar mensaje mientras se cargan los productos
            ) : (
                <div className="productos-lista">
                    {productos.map((producto, index) => (
                        <div className="producto" key={index} onClick={() => abrirModal(producto)}>
                            <img src={producto.image} alt={producto.name} className="producto-imagen" />
                            <h3>{producto.name}</h3>
                            <p>{formatPrice(producto.price)}</p>
                            <button className="add-to-cart-btn" disabled={!producto.available}>
                                <FaShoppingCart size={18} /> Añadir al carrito
                            </button>
                            {!producto.available && <p className="no-disponible">No disponible</p>}
                        </div>
                    ))}
                </div>
            )}

            {modal.abierto && (
                <div className="modal" onClick={cerrarModal}>
                    <div className="modal-content modal-row" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-img-side">
                            <img src={modal.producto.image} alt={modal.producto.name} className="producto-imagen" />
                        </div>
                        <div className="modal-info-side">
                            <h3>{modal.producto.name}</h3>
                            <p className="modal-precio">{formatPrice(modal.producto.price)}</p>
                            <p className="modal-descripcion">{modal.producto.description}</p>
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
                                disabled={!modal.producto.available}
                            >
                                <FaShoppingCart size={18} /> Añadir al carrito
                            </button>
                            {!modal.producto.available && (
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
