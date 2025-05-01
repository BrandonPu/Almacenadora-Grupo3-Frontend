import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../carrousel/carrousel.css'
import alimentos from '../../assets/img/comida.jpg';
import bebidas from '../../assets/img/bebidas.jpg';
import ropa from '../../assets/img/ropa.jpg';
import electrodomesticos from '../../assets/img/electrodomesticos.jpg';
import electronicos from '../../assets/img/electronicos.jpg';
import limpieza from '../../assets/img/limpieza.jpg';
import muebles from '../../assets/img/muebles.jpg';
import herramientas from '../../assets/img/herramientas.jpg';
import medicamentos from '../../assets/img/medicamentos.jpg';

export const ProductCarousel = () => {
    return (
        <>
            <div className="carousel-wrapper text-center">
                <h2 className="carousel-title">Bienvenido a nuestro almacen</h2>
                <p className="carousel-subtitle">
                    Aqui encontraras cualquier tipo de producto que necesites jeje.
                </p>

                <div id="multiItemCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center gap-3">
                                <img src={alimentos} className="d-block" alt="Alimentos" />
                                <img src={bebidas} className="d-block" alt="Bebidas" />
                                <img src={ropa} className="d-block" alt="Ropa" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center gap-3">
                                <img src={electrodomesticos} className="d-block" alt="Electrodomesticos" />
                                <img src={electronicos} className="d-block" alt="Electronicos" />
                                <img src={limpieza} className="d-block" alt="Productos de limpieza" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center gap-3">
                                <img src={muebles} className="d-block" alt="Muebles" />
                                <img src={herramientas} className="d-block" alt="Herramientas" />
                                <img src={medicamentos} className="d-block" alt="Medicamentos" />
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>

                    <div className="carousel-indicators mt-3">
                        <button type="button" data-bs-target="#multiItemCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#multiItemCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#multiItemCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                </div>
            </div>
            <section className="intro-section text-white text-center py-5">
                <div className="container">
                    <h3>¿Quiénes somos?</h3>
                    <p className="lead">
                        Somos un almacén comprometido con ofrecerte una amplia variedad de productos: desde artículos del hogar y herramientas, hasta productos de salud, tecnología y más.
                        Todo en un solo lugar para facilitar tu día a día.
                    </p>
                </div>
            </section>
        </>
    );
};