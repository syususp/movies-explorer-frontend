import React from 'react';
import './Page404.css';
import { useNavigate } from 'react-router-dom';

function Page404() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="page404">
      <h1 className="page404__title">404</h1>
      <p className="page404__subtitle">Страница не найдена</p>
      <button onClick={handleBackClick} className="page404__button">
        Назад
      </button>
    </section>
  );
}

export default Page404;
