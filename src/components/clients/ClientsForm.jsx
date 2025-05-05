import { useState } from "react";
import { Input } from "../settings/Input";
import { useClientForm } from "../../shared/hooks";

export const ClientForm = () => {
    const { saveClient, isLoading } = useClientForm();

    const [formState, setFormState] = useState({
        name: { 
            value: '', 
            isValid: false, 
            showError: false },
        surname:{ 
            value: '', 
            isValid: false, 
            showError: false },
        email:{ 
            value: '', 
            isValid: false, 
            showError: false },
        phoneNumber:{ 
            value: '', 
            isValid: false, 
            showError: false 
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState(prev => ({
            ...prev,
            [field]: {
                ...prev[field],
                value
            }
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = value.trim() !== '';

        if (field === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        }

        if (field === 'phoneNumber') {
            const phoneRegex = /^[0-9]{8,}$/; 
            isValid = phoneRegex.test(value);
        }

        setFormState(prev => ({
            ...prev,
            [field]: {
                ...prev[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await saveClient(
            formState.name.value,
            formState.surname.value,
            formState.email.value,
            formState.phoneNumber.value
        );
    };

    const isSubmitDisabled = isLoading ||
        !formState.name.isValid ||
        !formState.surname.isValid ||
        !formState.email.isValid ||
        !formState.phoneNumber.isValid;

    return (
        <div className="register-client-container">
            <form className="client-form">
                <Input
                    field="name"
                    label="Nombre"
                    value={formState.name.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.name.showError}
                />
                <Input
                    field="surname"
                    label="Apellido"
                    value={formState.surname.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.surname.showError}
                />
                <Input
                    field="email"
                    label="Email"
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type="email"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                />
                <Input
                    field="phoneNumber"
                    label="Teléfono"
                    value={formState.phoneNumber.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.phoneNumber.showError}
                />
                <button onClick={handleSubmit} disabled={isSubmitDisabled}>
                    {isLoading ? "Guardando..." : "Guardar Cliente"}
                </button>
            </form>
        </div>
    );
}
