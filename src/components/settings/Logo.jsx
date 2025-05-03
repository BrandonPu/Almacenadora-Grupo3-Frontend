import logo from '../../assets/img/Login.png'

export const Logo = ({ text }) => {
    return (
        <div className="auth-form-logo-container">
            <img src={logo} alt="Login" />
            <span>{text}</span>
        </div>
    )
}
