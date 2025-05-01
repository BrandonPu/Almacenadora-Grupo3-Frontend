import React from 'react';
import { Navbar } from '../../components/navbars/Navbar';
import logo from '../../assets/img/logomyaccount2.png';
import './account.css';

export const Account = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <p>No hay información del usuario disponible.</p>;
    }

    return (
        <>
            <Navbar />
            <div className="account-container">
                <div className="card account-card animate-fade-in">
                    <div className="card-header text-center account-header">
                        <img src={logo} alt="Usuario" className="account-logo" />
                        <h5 className="mt-3">Información Personal</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Nombre:</strong> {user.name}</li>
                            <li className="list-group-item"><strong>Apellido:</strong> {user.surname}</li>
                            <li className="list-group-item"><strong>Username:</strong> {user.username}</li>
                            <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                            <li className="list-group-item"><strong>Token:</strong> <code>{user.token}</code></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};