import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleSignin = () => {
    navigate('/signin');
  };

  return (
    <header className="header">
      <nav className="header__wrapper">
        <Link className="header__logo" to="/"></Link>
        <div className="header__buttons-wrapper">
          <button
            className="header__button-signup"
            type="button"
            onClick={handleSignup}
          >
            Регистрация
          </button>
          <button
            className="header__button-signin"
            type="button"
            onClick={handleSignin}
          >
            Войти
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// <nav>
// <ul>
//   <li>
//     <Link to="/">О проекте</Link>
//   </li>
//   <li>
//     <Link to="/movies">Фильмы</Link>
//   </li>
//   <li>
//     <Link to="/saved-movies">Сохранённые фильмы</Link>
//   </li>
//   <li>
//     <Link to="/profile">Аккаунт</Link>
//   </li>
//   <li>
//     <Link to="/signin">Авторизация</Link>
//   </li>
//   <li>
//     <Link to="/signup">Регистрация</Link>
//   </li>
// </ul>
// </nav>
