import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../images/icon.svg';
import menuIcon from '../../images/menu-icon.svg'; // Иконка для бургер-меню

function Header({ isLoggedIn }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // состояние бургер-меню

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleSignin = () => {
    navigate('/signin');
  };

  const toggleMenu = () => { // обработчик клика для бургер-меню
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="header__wrapper">
        <Link className="header__logo" to="/"></Link>
        {isLoggedIn ? (
          <>
            {isMenuOpen ? (
              <div className="header__menu"> {/* Бургер-меню */}
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
            )}
            <button className="header__menu-button" onClick={toggleMenu}> {/* Кнопка бургер-меню */}
              <img src={menuIcon} alt="Menu" />
            </button>
          </>
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
