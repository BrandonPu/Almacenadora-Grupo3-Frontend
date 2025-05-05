import { useState } from 'react';
import { Input } from '../settings/Input';
import { useRegisterSupplier } from '../../shared/hooks';

export const RegisterSuppliers = () => {
    const { registerSupplier, isLoading, error, success } = useRegisterSupplier();

    const [form, setForm] = useState({
        nameSupplier: '',
        emailSupplier: '',
        phoneNumber: "",
        nameProduct: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerSupplier(form);
    };

    return (
        <div className="registerSupplier-container">
            <form onSubmit={handleSubmit} className="supplier-form">
                <div>
                <input
                    type="text"
                    name="nameSupplier"
                    placeholder="Nombre del proveedor"
                    value={form.nameSupplier}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="emailSupplier"
                    placeholder="Correo del proveedor"
                    value={form.emailSupplier}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Teléfono"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="nameProduct"
                    placeholder="Nombre del producto que abastece"
                    value={form.nameProduct}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    {isLoading ? 'Registrando...' : 'Registrar'}
                </button>
            </form>

            {error && (
                <p className="text-red-600 mt-2 text-center">
                    {typeof error === 'string'
                        ? error
                        : error?.msg || 'Ocurrió un error al registrar'}
                </p>
            )}
            {success && (
                <p className="text-green-600 mt-2 text-center">
                    Proveedor registrado exitosamente
                </p>
            )}
        </div>
    );
};