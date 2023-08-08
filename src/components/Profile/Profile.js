import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

function Profile({ isLoggedIn }) {
  const navigate = useNavigate();

  function handleSignout() {
    navigate('/signin');
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <div className="profile__form-container">
              <div className="profile__wrapper">
                <label className="profile__name">Имя</label>
                <input
                  className="profile__input"
                  type="text"
                  placeholder="Введите имя"
                  required={true}
                />
              </div>
              <div className="profile__wrapper">
                <label className="profile__email">E-mail</label>
                <input
                  className="profile__input"
                  type="email"
                  name="email"
                  placeholder="Введите почту"
                />
              </div>
            </div>
            <div className="profile__navigate">
              <button className="profile__button profile__button-edit" type="button">
                Редактировать
              </button>
              <button className="profile__button profile__button-exit" type="button" onClick={handleSignout}>
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
