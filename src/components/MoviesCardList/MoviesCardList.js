import React from 'react';
import './MoviesCardList.css';
import words33 from '../../images/33words.png';
import let100 from '../../images/100let.png';
import benksy from '../../images/banksy.png';
import baskiya from '../../images/baskiya.png';
import beg from '../../images/beg.png';
import booksales from '../../images/booksales.png';
import aboutGermany from '../../images/aboutGermany.png';
import iggy from '../../images/iggi.png';
import djenis from '../../images/djenis.png';
import beforeJump from '../../images/beforeJump.png';
import dogCalled from '../../images/dogCalled.png';
import sound from '../../images/sound.png';
import { Link } from 'react-router-dom';

function MoviesCardList() {
  return (
    <section className="movieCardList">
      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={words33}
              alt="картина 33 слова о дизайне"
            />
          </Link>
          <h3 className="movie__name">33 слова о дизайне</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={let100}
              alt="Киноальманах 100 лет дизайна"
            />
          </Link>
          <h3 className="movie__name">Киноальманах «100 лет дизайна»</h3>
          <p className="movie__duration">1ч 3м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={benksy}
              alt="картина В погоне за Бенкси"
            />
          </Link>
          <h3 className="movie__name">В погоне за Бенкси</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={baskiya}
              alt="картина Баския - Взрыв реальности"
            />
          </Link>
          <h3 className="movie__name">Баския: Взрыв реальности</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={beg}
              alt="картина Бег это свобода"
            />
          </Link>
          <h3 className="movie__name">Бег это свобода</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={booksales}
              alt="картина Книготорговцы"
            />
          </Link>
          <h3 className="movie__name">Книготорговцы</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={aboutGermany}
              alt="картина Когда я думаю о Германии ночью"
            />
          </Link>
          <h3 className="movie__name">Когда я думаю о Германии ночью</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={iggy}
              alt="картина Gimme Danger: История Игги и The Stooge"
            />
          </Link>
          <h3 className="movie__name">
            Gimme Danger: История Игги и The Stooge...
          </h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={djenis}
              alt="картина Дженис: Маленькая девочка грустит"
            />
          </Link>
          <h3 className="movie__name">Дженис: Маленькая девочка грустит</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={beforeJump}
              alt="картина Соберись перед прыжком"
            />
          </Link>
          <h3 className="movie__name">Соберись перед прыжком</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={dogCalled}
              alt="картина Пи Джей Харви: A dog called money"
            />
          </Link>
          <h3 className="movie__name">Пи Джей Харви: A dog called money</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>

      <ul className="movie">
        <li className="movie__wrapper">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
            className="movie__link"
          >
            <img
              className="movie__image"
              src={sound}
              alt="картина По волнам: Искусство звука в кино"
            />
          </Link>
          <h3 className="movie__name">По волнам: Искусство звука в кино</h3>
          <p className="movie__duration">1ч 47м</p>
          <button className="movie__deleteButton" type="button"></button>
        </li>
      </ul>
    </section>
  );
}

export default MoviesCardList;
