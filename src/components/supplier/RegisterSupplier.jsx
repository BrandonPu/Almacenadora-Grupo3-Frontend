import { useState } from 'react';
import { useRegisterSupplier } from '../../shared/hooks/useRegisterSupplier';
import { Input } from '../settings/Input';

export const RegisterSuppliers = () => {
    const { saveSupplier, isLoading } = useRegisterSupplier();

    const [formState, setFormState] = useState({
        nameSupplier: {
            value: '',
            isValid: false,
            showError: false
        },
        emailSupplier: {
            value: '',
            isValid: false,
            showError: false,
        },
        phoneNumber: {
            value: "",
            isValid: false,
            showError: false
        },
        nameProduct: {
            value: "",
            isValid: false,
            showError: false
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = value.trim() !== '';
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleRegister = (event) => {
        event.preventDefault()
        saveSupplier(formState.nameSupplier.value, formState.emailSupplier.value, formState.phoneNumber.value, formState.nameProduct.value)
    }

    const isSubmitButtonDisabled = isLoading ||
        !formState.nameSupplier.isValid ||
        !formState.emailSupplier.isValid ||
        !formState.phoneNumber.isValid ||
        !formState.nameProduct.isValid;

    return (
        <div className="registerSupplier-container">
            <form className='supplier-form'>
                <div>
                <Input
                    field='nameSupplier'
                    label='NameSupplier'
                    value={formState.nameSupplier.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.nameSupplier.showError}
                />
                <Input
                    field='emailSupplier'
                    label='EmailSupplier'
                    value={formState.emailSupplier.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.emailSupplier.showError}
                />
                <Input
                    field='phoneNumber'
                    label='PhoneNumber'
                    value={formState.phoneNumber.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.phoneNumber.showError}
                />
                <Input
                    field='nameProduct'
                    label='NameProduct'
                    value={formState.nameProduct.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.nameProduct.showError}
                />
                </div>

                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Registrar Proveedor
                </button>
            </form>
        </div>
    );
};