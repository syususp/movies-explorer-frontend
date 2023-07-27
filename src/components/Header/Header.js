import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../images/icon.svg';

function Header({ isLoggedIn }) {
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
        {isLoggedIn ? (
          <div className="header__links-wrapper">
            <Link to="/movies" className="header__link">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__link">
              Сохраненные фильмы
            </Link>
            <Link to="/profile" className="header__link">
              Аккаунт
            </Link>
            <Link to="/profile" className="header__account-icon-wrapper">
              <img
                className="header__account-icon"
                src={icon}
                alt="Иконка аккаунта"
              />
            </Link>
          </div>
        ) : (
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
        )}
      </nav>
    </header>
  );
}

export default Header;
