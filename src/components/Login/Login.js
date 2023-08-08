import React from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login(props) {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      <div className="auth">
        <div className="auth__container">
          <Link to="/">
            <img src={logo} alt="Логотип проекта" className="signup__logo" />
          </Link>
          <h2 className="auth__title">Рады видеть!</h2>
          <form className={`auth__form`}>
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
              <button
                className="signup-block__button"
                type="button"
                onClick={handleSignup}
              >
                Регистрация
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
