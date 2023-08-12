import React from 'react';
import './Register.css';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { signin, signup } from '../../utils/MainApi';

function Register() {
  const navigate = useNavigate();

  const handleSignin = () => {
    navigate('/signin');
  };

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    const { name, email, password } = formData;
    const isValid = name && email && password;
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    signup(formData)
      .then((data) => {
        console.log('register.js signup method: ', data);
        signin({ email: formData.email, password: formData.password }).then(
          (data) => {
            console.log('register.js signin method: ', data);
            if (data.token) {
              localStorage.setItem('jwt', data.token);
              navigate('/movies');
            } else {
              console.error(data.message);
            }
          },
        );
      })
      .catch((error) => {
        console.log('Ошибка в методе hendleSubmit', error);
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
            onChange={handleChange}
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
              />
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
              />
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
              />
              <span className="signup__error">Что-то пошло не так...</span>
            </label>
            <button
              type="submit"
              className="signup__submit"
              disabled={!isFormValid}
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
