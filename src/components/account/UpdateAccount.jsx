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
        <div className="formUpdate-contaienr">
            <h2 className="titleAccount-container">Editar Cuenta</h2>
            
            <form onSubmit={handleUserSubmit} className="updateAccount-container">
                <div>
                    <label className="label-container">Nombre</label>
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
                    <label className="label-container">Apellido</label>
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
                    <label className="label-container">Username</label>
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
                    className="button-updateData"
                    disabled={loading}
                >
                    {loading ? 'Actualizando...' : 'Actualizar Datos'}
                </button>

                {success && <p className="text-green-600 text-sm mt-2">Datos actualizados correctamente.</p>}
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </form>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                    <label className="label-container">Contraseña actual</label>
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
                    <label className="label-container">Contraseña nueva</label>
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
                    <label className="label-container">Confirmar nueva contraseña</label>
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
                    className="button-updatePassword"
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
