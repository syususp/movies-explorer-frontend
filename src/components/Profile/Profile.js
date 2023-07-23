import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <div className="profile__inputs-container">
              <div className="profile__lable-container">
                <label className="profile__name">Имя</label>
                <input
                  className="profile__input"
                  type="text"
                  placeholder="Имя"
                  required={true}
                />
              </div>
              <div className="profile__line"></div>
              <div className="profile__lable-container">
                <label className="profile__email">E-mail</label>
                <input className="profile__input" type="email" name="email" />
              </div>
            </div>
            <div className="profile__navigate">
              <button className="profile__button-edit" type="button">
                Редактировать
              </button>
              <button type="button" className="profile__button-text">
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
