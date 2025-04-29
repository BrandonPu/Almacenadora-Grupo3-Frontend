export const validateUsername = (username) => {
    const regex = /^\S{3,15}$/
    return regex.test(username)
}

export const validateUsernameMessage = 'El username debe tener entre 3 y 15 caracteres sin espacios.'