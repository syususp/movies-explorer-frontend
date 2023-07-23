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
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={words33}
              alt="картина 33 слова о дизайне"
            />
          </Link>

          <h3 className="movie__caption-title">33 слова о дизайне</h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={let100}
              alt="Киноальманах 100 лет дизайна"
            />
          </Link>

          <h3 className="movie__caption-title">
            Киноальманах «100 лет дизайна»
          </h3>
          
        </li>

        <li className="movie__time-line">1ч 3м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={benksy}
              alt="картина В погоне за Бенкси"
            />
          </Link>

          <h3 className="movie__caption-title">В погоне за Бенкси</h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={baskiya}
              alt="картина Баския - Взрыв реальности"
            />
          </Link>

          <h3 className="movie__caption-title">Баския: Взрыв реальности</h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={beg}
              alt="картина Бег это свобода"
            />
          </Link>

          <h3 className="movie__caption-title">Бег это свобода</h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={booksales}
              alt="картина Книготорговцы"
            />
          </Link>

          <h3 className="movie__caption-title">Книготорговцы</h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={aboutGermany}
              alt="картина Когда я думаю о Германии ночью"
            />
          </Link>

          <h3 className="movie__caption-title">
            Когда я думаю о Германии ночью
          </h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={iggy}
              alt="картина Gimme Danger: История Игги и The Stooge"
            />
          </Link>

          <h3 className="movie__caption-title">
            Gimme Danger: История Игги и The Stooge...
          </h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={djenis}
              alt="картина Дженис: Маленькая девочка грустит"
            />
          </Link>

          <h3 className="movie__caption-title">
            Дженис: Маленькая девочка грустит
          </h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={beforeJump}
              alt="картина Соберись перед прыжком"
            />
          </Link>

          <h3 className="movie__caption-title">Соберись перед прыжком</h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={dogCalled}
              alt="картина Пи Джей Харви: A dog called money"
            />
          </Link>

          <h3 className="movie__caption-title">
            Пи Джей Харви: A dog called money
          </h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <Link
            to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            target={'_blank'}
          >
            <img
              className="movie__poster"
              src={sound}
              alt="картина По волнам: Искусство звука в кино"
            />
          </Link>

          <h3 className="movie__caption-title">
            По волнам: Искусство звука в кино
          </h3>
          
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>
    </section>
  );
}

export default MoviesCardList;
