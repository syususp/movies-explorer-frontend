import React from 'react';
import './AboutMe.css';
import avatar from '../../../images/avatar.png';

function AboutMe() {
  return (
    <section className="personal-info" id="personal-info">
      <h2 className="personal-info__role">Студент</h2>
      <div className="personal-info__container">
        <div className="personal-info__wrapper">
          <h3 className="personal-info__name">Виталий</h3>
          <p className="personal-info__title">Фронтенд-разработчик, 30 лет</p>
          <p className="personal-info__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. <br className="personal-info__wrap"/>
            С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/" className="personal-info__github" target='_blank' rel="noreferrer">
            Github
          </a>
        </div>
        <img
          src={avatar}
          alt="Изображение студента"
          className="personal__avatar"
        />
      </div>
    </section>
  );
}

export default AboutMe;
