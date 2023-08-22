import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink, useNavigate, useMatch } from 'react-router-dom';
import icon from '../../images/icon.svg';
import menuIcon from '../../images/menu-icon.svg';
import closeButton from '../../images/closeButton.svg';

function Header({ isLoggedIn }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const matchMovies = useMatch('/movies');
  const matchSavedMovies = useMatch('/saved-movies');
  const matchProfile = useMatch('/profile');

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleSignin = () => {
    navigate('/signin');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="header__wrapper">
        <Link className="header__logo" to="/"></Link>
        {isLoggedIn ? (
          <>
            {isMenuOpen ? (
              <div className="header__menu">
                <button
                  className="header__menu-close-button"
                  onClick={toggleMenu}
                >
                  <img
                    src={closeButton}
                    alt="Закрыть меню"
                    className="header__menu-image"
                  />
                </button>
                <div className="header__menu-wrapper">
                  <NavLink to="/" className="header__menu-link">
                    Главная
                  </NavLink>
                  <NavLink
                    to="/movies"
                    className={
                      matchMovies ? 'header__link active-link' : 'header__link'
                    }
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    to="/saved-movies"
                    className={
                      matchSavedMovies
                        ? 'header__link active-link'
                        : 'header__link'
                    }
                  >
                    Сохраненные фильмы
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className={
                      matchProfile ? 'header__link active-link' : 'header__link'
                    }
                  >
                    Аккаунт
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="header__account-icon-wrapper"
                  >
                    <img
                      className="header__account-icon"
                      src={icon}
                      alt="Иконка аккаунта"
                    />
                  </NavLink>
                </div>
              </div>
            ) : (
              <div className="header__links-wrapper">
                <NavLink
                  to="/movies"
                  className={
                    matchMovies ? 'header__link active-link' : 'header__link'
                  }
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved-movies"
                  className={
                    matchSavedMovies
                      ? 'header__link active-link'
                      : 'header__link'
                  }
                >
                  Сохраненные фильмы
                </NavLink>
                <NavLink
                  to="/profile"
                  className={
                    matchProfile ? 'header__link active-link' : 'header__link'
                  }
                >
                  Аккаунт
                </NavLink>

                <NavLink to="/profile" className="header__account-icon-wrapper">
                  <img
                    className="header__account-icon"
                    src={icon}
                    alt="Иконка аккаунта"
                  />
                </NavLink>
              </div>
            )}
            <button className="header__menu-button" onClick={toggleMenu}>
              <img src={menuIcon} alt="Menu" className="header__menu-image" />
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
