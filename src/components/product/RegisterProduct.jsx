import { useState, useEffect } from "react";
import { Input } from "../settings/Input";
import { useRegisterProducts, useCategoryView } from "../../shared/hooks";

export const RegisterProduct = ({ switchProductHandler }) => {
    const { registerProduct, isLoading } = useRegisterProducts();
    const { categories, error, loading } = useCategoryView();

    const [formState, setFormState] = useState({
        nameProduct: { value: "", isValid: false, showError: false },
        description: { value: "", isValid: false, showError: false },
        stock: { value: 0, isValid: false, showError: false },
        nameCategory: { value: "", isValid: false, showError: false },
        price: { value: 0, isValid: false, showError: false },
        entryDate: { value: "", isValid: false, showError: false },
        expirationDate: { value: "", isValid: false, showError: false },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = value.trim() !== "";

        if (field === "stock" || field === "price") {
            isValid = !isNaN(value) && Number(value) >= 0;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handleRegister = (event) => {
        event.preventDefault();
        registerProduct(
            formState.nameProduct.value,
            formState.description.value,
            formState.stock.value,
            formState.nameCategory.value,
            formState.price.value,
            formState.entryDate.value,
            formState.expirationDate.value
        );
    };

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.nameProduct.isValid ||
        !formState.description.isValid ||
        !formState.stock.isValid ||
        !formState.nameCategory.isValid ||
        !formState.price.isValid ||
        !formState.entryDate.isValid ||
        !formState.expirationDate.isValid;

    return (
        <div className="registerproducts-container">
            <form className="product-form" onSubmit={handleRegister}>
                <div>
                    <Input
                        field="nameProduct"
                        label="NameProduct"
                        value={formState.nameProduct.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.nameProduct.showError}
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
                    <Input
                        field="stock"
                        label="Stock"
                        value={formState.stock.value}
                        onChangeHandler={handleInputValueChange}
                        type="number"
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.stock.showError}
                    />
                    <div className="form-group">
                        <label className="form-label">Categoría</label>
                        <select
                            className="form-select"
                            value={formState.nameCategory.value}
                            onChange={(e) =>
                                handleInputValueChange(e.target.value, "nameCategory")
                            }
                            onBlur={(e) =>
                                handleInputValidationOnBlur(e.target.value, "nameCategory")
                            }
                        >
                            <option value="">-- Selecciona una categoría --</option>
                            {categories.map((cat) => (
                                <option key={cat._id} value={cat.nameCategory}>
                                    {cat.nameCategory}
                                </option>
                            ))}
                        </select>
                        {formState.nameCategory.showError && (
                            <span className="error-message">
                                Selecciona una categoría válida
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <Input
                        field="price"
                        label="Price"
                        value={formState.price.value}
                        onChangeHandler={handleInputValueChange}
                        type="number"
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.price.showError}
                    />
                    <Input
                        field="entryDate"
                        label="EntryDate"
                        value={formState.entryDate.value}
                        onChangeHandler={handleInputValueChange}
                        type="date"
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.entryDate.showError}
                    />
                    <Input
                        field="expirationDate"
                        label="ExpirationDate"
                        value={formState.expirationDate.value}
                        onChangeHandler={handleInputValueChange}
                        type="date"
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.expirationDate.showError}
                    />
                </div>

                <button type="submit" disabled={isSubmitButtonDisabled}>
                    Registrar Producto
                </button>
            </form>
        </div>
    );
};
