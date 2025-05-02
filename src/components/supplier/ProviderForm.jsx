// formulario para crear o editar
import { useState } from "react";
import { Input } from "../settings/Input";
import { useProviderForm } from "../../shared/hooks";
import { 
    validateNotEmpty,
    validateNotEmptyMessage 
} from "../../shared/validators";


export const SaveSuplier = ({ switchAuthHandler }) => {
    const { saveSuplier, isLoading } = useProviderForm();

    const [formState, setFormState] = useState({
        nameSupplier: {
            value: '',
            isValid: false,
            showError: false
        },
        emailSupplier: {
            value: '',
            isValid: false,
            showError: false
        },
        phoneNumber:{
            value: '',
            isValid: false,
            showError: false
        },
        nameProduct: {
            value: '',
            isValid: false,
            showError: false
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    }

    const handleInputValidationOnBlur = (value, field) =>{
        let isValid = false;
        switch (field) {
            case 'nameSupplier':
                isValid = validateNotEmpty(value)
                break;
            case 'emailSupplier':
                isValid = validateNotEmpty(value)
                break;
            case 'phoneNumber':
                isValid = validateNotEmpty(value)
                break;
            case 'nameProduct':
                isValid = validateNotEmpty(value)
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));   
    }

    const handleAgregar = (event) => {
        event.preventDefault();
        saveSuplier(formState.nameSupplier.value,formState.emailSupplier.value,formState.phoneNumber.value,formState.nameProduct.value)
    }

    const isSubmitButtonDisabled = isLoading ||
        !formState.nameSupplier.isValid ||
        !formState.emailSupplier.isValid||
        !formState.phoneNumber.isValid||
        !formState.nameProduct.isValid;
    return (
        <div className="register">
            <h2>Registrar Proveedor</h2>
            <form >
                <Input                    
                    field='nameSupplier'
                    label='NameSupplier'
                    value={formState.nameSupplier.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.nameSupplier.showError}
                    validationMessage={validateNotEmptyMessage}
                />
                <Input
                    field='emailSupplier'
                    label='EmailSupplier'
                    value={formState.emailSupplier.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.emailSupplier.showError}
                    validationMessage={validateNotEmptyMessage}
                />
                <Input
                    field='phoneNumber'
                    label='PhoneNumber'
                    value={formState.phoneNumber.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.phoneNumber.showError}
                    validationMessage={validateNotEmptyMessage}
                />
                <Input
                    field='nameProduct'
                    label='NameProduct'
                    value={formState.nameProduct.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.nameProduct.showError}
                    validationMessage={validateNotEmptyMessage}
                />
                <button onClick={handleAgregar} disabled={isSubmitButtonDisabled}>
                    Agregar
                </button>
            </form>
        </div>
    )
}
