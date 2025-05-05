import { useState } from 'react';
import { SupplierTable } from '../../components/supplier/SupplierTable';
import { RegisterSuppliers } from '../../components/supplier/RegisterSupplier';
import { Navbar } from '../../components/navbars/Navbar';
import "./supplierPage.css";

export const SupplierPage = () => {
    const [viewMode, setViewMode] = useState('table');
    
    return (
        <>
        <Navbar/>
        <div style={{ paddingTop: '15px' }} />
        <div className="supplier-container">
            <div className="supplier-header">
                <h1>Administración de Proveedores</h1>
                <div className="button-group">
                    <button 
                        className={`btn ${viewMode === 'table' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setViewMode('table')}
                    >
                        Ver Proveedores
                    </button>
                    <button 
                        className={`btn ${viewMode === 'registerprovedor' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setViewMode('registerprovedor')}
                    >
                        Agregar Proveedor
                    </button>
                </div>
            </div>

            {viewMode === "table" && (
                <div className="supplier-table-container">
                    <SupplierTable />
                </div>
            )}
            {viewMode === "registerprovedor" && <RegisterSuppliers />}
        </div>
        </>
    );
};