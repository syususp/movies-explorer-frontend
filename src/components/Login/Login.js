import React from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { signin } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validationHooks';

function Login() {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) {
      console.log('Form is not valid');
      return;
    }

    const { email, password } = values;

    signin({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          navigate('/movies');
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.log('Error while logging in:', error);
      });
  };

  return (
    <>
      <div className="auth">
        <div className="auth__container">
          <Link to="/">
            <img src={logo} alt="Логотип проекта" className="signup__logo" />
          </Link>
          <h2 className="auth__title">Рады видеть!</h2>
          <form className={`auth__form`} onSubmit={handleSubmit}>
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
                value={values.email || ''}
                onChange={handleChange}
              />
              {errors.email && <span className="auth__error">{errors.email}</span>}
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
              {errors.password && <span className="auth__error">{errors.password}</span>}
            </label>
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
    </>
  );
}

export default Login;
