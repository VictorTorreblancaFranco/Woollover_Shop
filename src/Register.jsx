import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

export default function Register({ onRegistered, switchToLogin }) {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        try {
            await axios.post('http://localhost:5000/api/auth/register', form);
            onRegistered();
        } catch (err) {
            setError(err.response?.data?.message || 'Error al registrar');
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Registrarse</h2>
                {error && <p className="error">{error}</p>}

                <label>
                    Nombre
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Contraseña
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button type="submit">Crear cuenta</button>

                <p className="toggle-link">
                    ¿Ya tienes cuenta?{' '}
                    <button
                        type="button"
                        className="link"
                        onClick={switchToLogin}
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    >
                        Inicia sesión
                    </button>
                </p>
            </form>
        </div>
    );
}
