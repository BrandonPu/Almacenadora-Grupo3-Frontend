import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logomyaccount.png'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate('/');
    };

    return (
        <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: '#001526' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/dashboardPage">Almacén de Productos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header" style={{ backgroundColor: '#001526' }}>
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column justify-content-between"  style={{ height: '100%', backgroundColor: '#001526'}}>
                        <ul className="navbar-nav pe-3">
                            <li className="nav-item">

                            <NavLink to="/dashboardPage" className="nav-link">
                            Inicio
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/productPage" className="nav-link">
                            Productos
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/clientPage" className="nav-link">
                            Clientes
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/categoriesPage" className="nav-link">
                            Categorias
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/supplierPage" className="nav-link">
                            Proveedores
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/reportPage" className="nav-link">
                            Reportes y Estadisticas
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/userPage" className="nav-link">
                            Usuarios
                            </NavLink>
                            </li>
                        </ul>
                        <div className="d-flex flex-column align-items-end gap-2 mt-4">
                            <NavLink
                                to="/account"
                                className={({ isActive }) =>
                                    `btn btn-outline-light d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`
                                }
                            >
                                <img src={logo} alt="Cuenta" style={{ width: '30px', height: '30px' }} />
                                My Account
                            </NavLink>

                            <button className="btn btn-danger" onClick={handleLogout}>
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};