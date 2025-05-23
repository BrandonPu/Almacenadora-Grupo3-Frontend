import React from 'react';
import { Navbar } from '../../components/navbars/Navbar'
import { ProductCarousel } from '../../components/carrousel/Carrousel'

export const DashboardPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '50px' }}/>
            <ProductCarousel />
        </div>
    );
};