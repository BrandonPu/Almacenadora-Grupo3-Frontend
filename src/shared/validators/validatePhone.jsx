export const validatePhone = (telefono) => {
    const regex = /^\d{8}$/;
    return regex.test(telefono);
}

export const validatePhoneMessage = 'No se permiten espacion ni letras 8 numeros Maximos ';