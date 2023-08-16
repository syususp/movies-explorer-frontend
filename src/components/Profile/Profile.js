import React, { useState, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { getProfile, updateProfile } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validationHooks';

function Profile({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const [message, setMessage] = useState({ text: '', isError: false });
  const [initialName, setInitialName] = useState('');

  useEffect(() => {
    getProfile(localStorage.getItem('jwt')).then((data) => {
      resetForm({ name: data.name, email: data.email }, {}, true);
      setInitialName(data.name);
    });
  }, [resetForm]);

  const handleUpdateProfile = () => {
    updateProfile(values)
      .then((response) => {
        if (response.name) {
          setMessage({ text: 'Profile updated successfully', isError: false });
          setTimeout(() => {
            setMessage({ text: '', isError: false });
          }, 1000);
          setInitialName(response.name);
        } else {
          setMessage({ text: 'Error updating profile', isError: true });
        }
      })
      .catch(() => {
        setMessage({ text: 'Error updating profile', isError: true });
      });
  };

  const handleSignout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate('/signin');
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">Привет, {initialName}!</h1>
          <form className="profile__form">
            <div className="profile__form-container">
              <div className="profile__wrapper">
                <label className="profile__name">Имя</label>
                <input
                  name="name"
                  className="profile__input"
                  type="text"
                  placeholder="Введите имя"
                  value={values.name || ''}
                  onChange={handleChange}
                  required
                />
                {/* <span className="profile__error">{errors.name}</span> */}
              </div>
              <div className="profile__wrapper">
                <label className="profile__email">E-mail</label>
                <input
                  name="email"
                  className="profile__input"
                  type="email"
                  placeholder="Введите почту"
                  value={values.email || ''}
                  onChange={handleChange}
                  required
                />
                {/* <span className="profile__error">{errors.email}</span> */}
              </div>
              <span
                className={`profile__message ${
                  errors.name || errors.email ? 'error' : 'success'
                }`}
              >
                {errors.name || errors.email || message.text}
              </span>
            </div>
            <div className="profile__navigate">
              <button
                className="profile__button profile__button-edit"
                type="button"
                onClick={handleUpdateProfile}
                disabled={!isValid}
              >
                Редактировать
              </button>
              <button
                className="profile__button profile__button-exit"
                type="button"
                onClick={handleSignout}
              >
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
