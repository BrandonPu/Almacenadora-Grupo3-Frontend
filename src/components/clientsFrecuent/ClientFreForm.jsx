import { useState } from "react";
import { Input } from "../settings/Input";
import { useClientFrecuentForm, useClientPage } from "../../shared/hooks";

export const ClientFrecuentForm = () => {
    const { saveClientFrecuent, isLoading } = useClientFrecuentForm()
    const { clients } = useClientPage()

    const [formState, setFormState] = useState({
        name:{ value: '', 
            isValid: false, 
            showError: false 
        },
        surname:{ value: '', 
            isValid: false, 
            showError: false 
        },
        email:{ 
            value: '', 
            isValid: false, 
            showError: false 
        },
        phoneNumber:{ 
            value: '', 
            isValid: false, 
            showError: false 
        }
    })

    const handleInputValueChange = (value, field) =>{
        setFormState(prev => ({
            ...prev,
            [field]: { ...prev[field], value }
        }))
    }

    const handleInputValidation = (field, value) => {
        let isValid = value.trim() !== ''

        if (field === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            isValid = emailRegex.test(value);
        }

        if (field === 'phoneNumber') {
            const phoneRegex = /^[0-9]{8,}$/
            isValid = phoneRegex.test(value)
        }

        setFormState(prev => ({
            ...prev,
            [field]: {
                ...prev[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleSelectEmail = (e) => {
        const selectedEmail = e.target.value;
        const client = clients.find(c => c.email === selectedEmail)

        if (client) {
            const updatedState = {
                name:{ 
                    value: client.name, 
                    isValid: true, 
                    showError: false 
                },
                surname:{ 
                    value: client.surname, 
                    isValid: true, 
                    showError: false 
                },
                email:{ 
                    value: client.email, 
                    isValid: true, 
                    showError: false 
                },
                phoneNumber:{ 
                    value: client.phoneNumber, 
                    isValid: true, 
                    showError: false 
                }
            };
            setFormState(updatedState)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const confirmAdd = window.confirm("¿Estás seguro de que este cliente tiene más de 10 compras?")
        if (!confirmAdd) return

        await saveClientFrecuent(
            formState.name.value,
            formState.surname.value,
            formState.email.value,
            formState.phoneNumber.value
        )
    }

    const isSubmitDisabled = isLoading ||
        !formState.name.isValid ||
        !formState.surname.isValid ||
        !formState.email.isValid ||
        !formState.phoneNumber.isValid

        return (
            <div className="register-client-container">
                <form className="client-form">
                    <div>
                        <span>Email</span>
                        <select 
                            className="selectEmailClienFre"
                            onChange={handleSelectEmail} 
                            defaultValue="">
                            <option value="" disabled>Seleccione un correo</option>
                            {clients.map(client => (
                                <option key={client._id} value={client.email}>
                                    {client.email}
                                </option>
                            ))}
                        </select>
                    </div>
    
                    <Input
                        field="name"
                        label="Nombre"
                        value={formState.name.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={(value) => handleInputValidation("name", value)}
                        showErrorMessage={formState.name.showError}
                    />
                    <Input
                        field="surname"
                        label="Apellido"
                        value={formState.surname.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={(value) => handleInputValidation("surname", value)}
                        showErrorMessage={formState.surname.showError}
                    />
                    <Input
                        field="phoneNumber"
                        label="Teléfono"
                        value={formState.phoneNumber.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={(value) => handleInputValidation("phoneNumber", value)}
                        showErrorMessage={formState.phoneNumber.showError}
                    />
    
                    <button onClick={handleSubmit} disabled={isSubmitDisabled}>
                        {isLoading ? "Guardando..." : "Guardar Cliente Frecuente"}
                    </button>
                </form>
            </div>
        )
    }
