import React from "react";
import "./Page404.css";
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <section className="page404">
      <h1 className="page404__title">404</h1>
      <p className="page404__subtitle">Страница не найдена</p>
      <Link to="/" className="page404__button">
        Назад
      </Link>
    </section>
  );
}

export default Page404;