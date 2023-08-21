import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { signin, getProfile } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validationHooks';

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [message, setMessage] = useState({ text: '', isError: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage({ text: '', isError: false });

    const { email, password } = values;

    signin({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          props.setIsLoggedIn(true);
          props.navigate('/movies');
          getProfile(data.token).then((userData) => {
            props.setCurrentUser(userData);
          });
        } else if (
          data.validation &&
          data.validation.body.message.includes('must be a valid email')
        ) {
          setMessage({
            text: 'Проверьте введенную электронную почту',
            isError: true,
          });
        } else {
          setMessage({ text: data.message, isError: true });
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setMessage({
            text: 'Неверная почта или пароль',
            isError: true,
          });
        } else {
          setMessage({
            text: 'Что-то пошло не так. Попробуйте позже',
            isError: true,
          });
        }
      });
  };

  const handleSignup = () => {
    props.navigate('/signup');
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <Link to="/">
          <img src={logo} alt="Логотип проекта" className="signup__logo" />
        </Link>
        <h2 className="auth__title">Рады видеть!</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label htmlFor="authEmail" className="auth__label">
            E-mail
            <input
              id="authEmail"
              name="email"
              type="email"
              className={`auth__input ${errors.email ? 'error' : ''}`}
              placeholder=""
              minLength="2"
              maxLength="40"
              required
              value={values.email || ''}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="auth__error">{errors.email}</span>
            )}
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
              value={values.password || ''}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="auth__error">{errors.password}</span>
            )}
          </label>
          <span
            className={`auth__message ${message.isError ? 'error' : 'success'}`}
          >
            {message.text}
          </span>
          <button type="submit" className="auth__submit" disabled={!isValid}>
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
  );
}

export default Login;
