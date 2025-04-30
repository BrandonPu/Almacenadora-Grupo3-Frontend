import React from 'react';
import { Navbar } from '../../components/navbars/Navbar'

export const Account = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <p>No hay información del usuario disponible.</p>;
    }

    return (
        <>
            <Navbar/>
            <div style={{ padding: '5rem' }}>
                <h2>Mi Cuenta</h2>
                <ul>
                    <li><strong>Nombre:</strong> {user.name}</li>
                    <li><strong>Apellido:</strong> {user.surname}</li>
                    <li><strong>Username:</strong> {user.username}</li>
                    <li><strong>Email:</strong> {user.email}</li>
                    <li><strong>Token:</strong> {user.token}</li>
                </ul>
            </div>
        </>
    );
};