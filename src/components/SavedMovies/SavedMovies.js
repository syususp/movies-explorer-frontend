import React from 'react';
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import movieImage1 from '../../images/movieImage.png';
import movieImage2 from '../../images/movieImage2.png';
import movieImage3 from '../../images/movieImage3.png';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function SavedMovies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm />

        <section className="savedMovieCardList">
          <ul className="savedMovie">
            <li className="savedMovie__wrapper">
              <Link
                to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
                target={'_blank'}
                className="savedMovie__link"
              >
                <img
                  className="savedMovie__image"
                  src={movieImage1}
                  alt="картина 33 слова о дизайне"
                />
              </Link>
              <h3 className="savedMovie__name">33 слова о дизайне</h3>
              <li className="savedMovie__duration">1ч 47м</li>
              <button
                className="savedMovie__deleteButton"
                type="button"
              ></button>
            </li>
          </ul>

          <ul className="savedMovie">
            <li className="savedMovie__wrapper">
              <Link
                to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
                target={'_blank'}
                className="savedMovie__link"
              >
                <img
                  className="savedMovie__image"
                  src={movieImage2}
                  alt="Киноальманах 100 лет дизайна"
                />
              </Link>
              <h3 className="savedMovie__name">
                Киноальманах «100 лет дизайна»
              </h3>
              <li className="savedMovie__duration">1ч 3м</li>
              <button
                className="savedMovie__deleteButton"
                type="button"
              ></button>
            </li>
          </ul>

          <ul className="savedMovie">
            <li className="savedMovie__wrapper">
              <Link
                to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
                target={'_blank'}
                className="savedMovie__link"
              >
                <img
                  className="savedMovie__image"
                  src={movieImage3}
                  alt="картина В погоне за Бенкси"
                />
              </Link>
              <h3 className="savedMovie__name">В погоне за Бенкси</h3>
              <li className="savedMovie__duration">1ч 47м</li>
              <button
                className="savedMovie__deleteButton"
                type="button"
              ></button>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
