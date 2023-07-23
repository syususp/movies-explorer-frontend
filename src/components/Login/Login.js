import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login(props) {
  const navigate = useNavigate();

  //   const [formData, setFormData] = React.useState({
  //     email: '',
  //     password: '',
  //   });

  //   function handleChange(event) {
  //     const { name, value } = event.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const { password, email } = formData;
  //     props.onLogin(password, email);
  //   }

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      <div className="auth">
        <div className="auth__container">
          <img src={logo} alt="Логотип проекта" className="auth__logo" />
          <h2 className="auth__title">Рады видеть!</h2>
          <form
            className={`auth__form`}
            // onChange={handleChange}
            // onSubmit={handleSubmit}
          >
            <label htmlFor="authEmail" className="auth__label">
              E-mail
              <input
                id="authEmail"
                name="email"
                type="email"
                className="auth__input"
                placeholder=""
                minLength="2"
                maxLength="40"
                required
              />
            </label>
            <label htmlFor="authPassword" className="auth__label">
              Пароль
              <input
                id="authPassword"
                name="password"
                type="password"
                className="auth__input"
                placeholder=""
                minLength="8"
                maxLength="21"
                required
              />
            </label>
            <button type="submit" className="auth__submit">
              Войти
            </button>
            <div className="signup-block">
              <p className="signup-block__text">Ещё не зарегистрированы?</p>
              <button className="signup-block__button" type="button">
                Регистрация
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <InfoTooltip
        name="error-popup"
        infoText={['Что-то пошло не так!', 'Попробуйте ещё раз.']}
        image={UnionError}
        altText={'Что-то пошло не так!'}
        onClose={props.onClose}
        isOpen={props.isOpen}
      /> */}
    </>
  );
}

export default Login;
