import { useState } from 'react';
import { useUpdateUser } from '../../shared/hooks';
import './updateAccount.css';

export const UpdateAccount = () => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
        username: '',
        passwordOld: '',
        passwordNew: '',
        passwordConfirm: ''
    });

    const { updateUserData, updatePassword, loading, error, success } = useUpdateUser();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        await updateUserData({
            name: form.name,
            surname: form.surname,
            username: form.username
        });
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        if (form.passwordNew !== form.passwordConfirm) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        await updatePassword({
            passwordOld: form.passwordOld,
            passwordNew: form.passwordNew
        });
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">Editar Cuenta</h2>
            
            <form onSubmit={handleUserSubmit} className="space-y-4 mb-6">
                <div>
                    <label className="block text-sm font-medium">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Apellido</label>
                    <input
                        type="text"
                        name="surname"
                        value={form.surname}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    disabled={loading}
                >
                    {loading ? 'Actualizando...' : 'Actualizar Datos'}
                </button>

                {success && <p className="text-green-600 text-sm mt-2">Datos actualizados correctamente.</p>}
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </form>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Contraseña actual</label>
                    <input
                        type="password"
                        name="passwordOld"
                        value={form.passwordOld}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Contraseña nueva</label>
                    <input
                        type="password"
                        name="passwordNew"
                        value={form.passwordNew}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Confirmar nueva contraseña</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        value={form.passwordConfirm}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                    disabled={loading}
                >
                    {loading ? 'Actualizando...' : 'Actualizar Contraseña'}
                </button>

                {success && <p className="text-green-600 text-sm mt-2">Contraseña actualizada correctamente.</p>}
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </form>
        </div>
    );
};
