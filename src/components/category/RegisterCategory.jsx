import { useState } from "react";
import { Input } from "../settings/Input";
import { useRegisterCategory } from "../../shared/hooks/useRegisterCategories";

export const AddCategory = ({ switchCategoryHandler }) => {
    const { addCategory, isLoading } = useRegisterCategory();

    const [formState, setFormState] = useState({
        nameCategory: {
            value: '',
            isValid: false,
            showError: false
        },
        description: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            }
        }));
    };

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
        addCategory(formState.nameCategory.value, formState.description.value)
    }

    const isSubmitButtonDisabled = isLoading || 
        !formState.nameCategory.isValid || 
        !formState.description.isValid;

    return (
        <div className="registerCategories-container">
            <form className="Category-form">
                <div>
                    <Input
                        field="nameCategory"
                        label="NameCategory"
                        value={formState.nameCategory.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.nameCategory.showError}
                    />
                    <Input
                        field="description"
                        label="Description"
                        value={formState.description.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.description.showError}
                    />
                </div>
                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Registrar Categoria
                </button>
            </form>
        </div>
    );
};