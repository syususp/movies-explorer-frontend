import React, { useState, useEffect, useContext } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validationHooks';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ isLoggedIn, setIsLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const [message, setMessage] = useState({ text: '', isError: false });
  const [initialName, setInitialName] = useState('');
  const [initialEmail, setInitialEmail] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm({ name: currentUser.name, email: currentUser.email }, {}, true);
      setInitialName(currentUser.name);
      setInitialEmail(currentUser.email);
    } else {
      setIsLoggedIn(false);
      navigate('/signin');
    }
  }, [currentUser, resetForm, setIsLoggedIn, navigate]);

  useEffect(() => {
    const dataChanged =
      initialName !== values.name || initialEmail !== values.email;
    setHasChanges(dataChanged);
  }, [values, initialName, initialEmail]);

  const handleUpdateProfile = () => {
    updateProfile(values)
      .then((response) => {
        if (response.name) {
          setMessage({ text: 'Профиль успешно обновлён', isError: false });
          setTimeout(() => {
            setMessage({ text: '', isError: false });
          }, 1000);
          setInitialName(response.name);
          setInitialEmail(response.email);
        } else {
          setMessage({ text: 'Ошибка при обновлении профиля', isError: true });
        }
      })
      .catch(() => {
        setMessage({ text: 'Ошибка при обновлении профиля', isError: true });
      });
  };

  const handleSignout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('storedQuerymovies');
    localStorage.removeItem('storedSavedMovies');
    localStorage.removeItem('storedMovies');

    setIsLoggedIn(false);
    navigate('/');
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
                className={`profile__button profile__button-edit ${
                  !hasChanges ? 'profile__button-disabled' : ''
                }`}
                type="button"
                onClick={handleUpdateProfile}
                disabled={!isValid || !hasChanges}
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
