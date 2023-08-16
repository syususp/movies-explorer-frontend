import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { signin, signup } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validationHooks';

function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSignin = () => {
    props.navigate('/signin');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password } = values;

    if (!isValid) {
      console.log('Форма невалидна');
      return;
    }

    signup({ name, email, password })
      .then((data) => {
        signin({ email, password }).then((data) => {
          if (data.token) {
            localStorage.setItem('jwt', data.token);
            props.setIsLoggedIn(true);
            props.navigate('/movies');
          } else {
            console.error(data.message);
          }
        });
      })
      .catch((error) => {
        console.log('Ошибка при отправке формы: ', error);
      });
  };

  return (
    <>
      <div className="signup">
        <div className="signup__container">
          <Link to="/">
            <img src={logo} alt="Логотип проекта" className="signup__logo" />
          </Link>
          <h2 className="signup__title">Добро пожаловать!</h2>
          <form
            className={`signup__form`}
            onSubmit={handleSubmit}
          >
            <label htmlFor="signupName" className="signup__label">
              Имя
              <input
                id="signupName"
                name="name"
                type="text"
                className="signup__input"
                placeholder=""
                minLength="8"
                maxLength="21"
                required
                value={values.name || ''}
                onChange={handleChange}
              />
              {errors.name && <span className="signup__error">{errors.name}</span>}
            </label>
            <label htmlFor="signupEmail" className="signup__label">
              E-mail
              <input
                id="signupEmail"
                name="email"
                type="email"
                className="signup__input"
                placeholder=""
                minLength="2"
                maxLength="40"
                required
                value={values.email || ''}
                onChange={handleChange}
              />
              {errors.email && <span className="signup__error">{errors.email}</span>}
            </label>
            <label htmlFor="signupPassword" className="signup__label">
              Пароль
              <input
                id="signupPassword"
                name="password"
                type="password"
                className="signup__input"
                placeholder=""
                minLength="8"
                maxLength="21"
                required
                value={values.password || ''}
                onChange={handleChange}
              />
              {errors.password && <span className="signup__error">{errors.password}</span>}
            </label>
            <button
              type="submit"
              className="signup__submit"
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
            <div className="signin-block">
              <p className="signin-block__text">Уже зарегистрированы?</p>
              <button
                className="signin-block__button"
                type="button"
                onClick={handleSignin}
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
