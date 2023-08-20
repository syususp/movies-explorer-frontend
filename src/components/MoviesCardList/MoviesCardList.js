import React, { useState, useEffect, useContext, useCallback } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { getMovies } from '../../utils/ApiFilm';
import { getSaveMovies } from '../../utils/MainApi';
import { filterMovies } from '../../utils/filterMovies';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {
  VISIBLE_ROWS_LARGE,
  VISIBLE_ROWS_MEDIUM,
  VISIBLE_ROWS_SMALL,
  MAX_SCREEN_SMALL,
  MAX_SCREEN_MEDIUM,
  MAX_SCREEN_LARGE,
  CARDS_INCREMENT_LARGE,
  CARDS_INCREMENT_MEDIUM,
  CARDS_INCREMENT_SMALL,
} from '../../constants/constants';

function MoviesCardList({ query, isShortMoviesChecked }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [areAllMoviesShown, setAreAllMoviesShown] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const [savedMovies, setSavedMovies] = useState([]);

  const getInitialVisibleRows = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > MAX_SCREEN_LARGE) {
      return VISIBLE_ROWS_LARGE;
    } else if (windowWidth > MAX_SCREEN_MEDIUM) {
      return VISIBLE_ROWS_MEDIUM;
    } else {
      return VISIBLE_ROWS_SMALL;
    }
  };
  
  const [adjustedVisibleRows, setAdjustedVisibleRows] = useState(
    getInitialVisibleRows(),
  );

  useEffect(() => {
    setAdjustedVisibleRows(getInitialVisibleRows());
  }, [query]);

  const fetchMovies = useCallback(() => {
    const storedMovies = localStorage.getItem('storedMovies');
    const storedSavedMovies = localStorage.getItem('storedSavedMovies');

    if (storedMovies && storedSavedMovies) {
      setMovies(JSON.parse(storedMovies));
      setSavedMovies(JSON.parse(storedSavedMovies));
      return;
    }

    setIsLoading(true);
    setError(null);

    Promise.all([getMovies(), getSaveMovies()])
      .then(([moviesData, savedMoviesData]) => {
        setMovies(moviesData);
        setSavedMovies(savedMoviesData);
        localStorage.setItem('storedMovies', JSON.stringify(moviesData));
        localStorage.setItem(
          'storedSavedMovies',
          JSON.stringify(savedMoviesData),
        );
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (query || isShortMoviesChecked) {
      fetchMovies();
    }
  }, [query, isShortMoviesChecked, fetchMovies]);

  useEffect(() => {
    const handleResize = () => {
      setAdjustedVisibleRows(getInitialVisibleRows());
    };

    let resizeTimeout;

    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        handleResize();
      }, 300);
    };

    handleResize();
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  const visibleMovies = filterMovies(movies, query, isShortMoviesChecked);

  useEffect(() => {
    if (adjustedVisibleRows >= visibleMovies.length) {
      setAreAllMoviesShown(true);
    } else {
      setAreAllMoviesShown(false);
    }
  }, [visibleMovies, adjustedVisibleRows]);

  const showMoreMovies = () => {
    let increment;

    if (window.innerWidth <= MAX_SCREEN_SMALL) {
      increment = CARDS_INCREMENT_SMALL;
    } else if (window.innerWidth <= MAX_SCREEN_LARGE) {
      increment = CARDS_INCREMENT_MEDIUM;
    } else {
      increment = CARDS_INCREMENT_LARGE;
    }

    if (adjustedVisibleRows + increment <= visibleMovies.length) {
      setAdjustedVisibleRows(adjustedVisibleRows + increment);
    } else {
      setAdjustedVisibleRows(visibleMovies.length);
      setAreAllMoviesShown(true);
    }
  };

  return (
    <>
      <section className="movieCardList">
        {isLoading && <Preloader />}
        {!isLoading && error && (
          <p className="movieCardList__hint">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>
        )}
        {!isLoading && !error && visibleMovies.length === 0 && (
          <p className="movieCardList__hint">Ничего не найдено</p>
        )}
        {!isLoading && !error && (
          <React.Fragment>
            {visibleMovies.slice(0, adjustedVisibleRows).map((movie) => {
              const isSaved = savedMovies.some(
                (savedMovie) => savedMovie.movieId === movie.id,
              );

              return (
                <MovieCard
                  key={movie.id}
                  isSaved={isSaved}
                  savedMovies={savedMovies}
                  movieUrl={movie.trailerLink}
                  altText={movie.nameRU}
                  movieName={movie.nameRU}
                  movieDuration={movie.duration}
                  country={movie.country}
                  director={movie.director}
                  year={movie.year}
                  description={movie.description}
                  image={movie.image.url}
                  trailerLink={movie.trailerLink}
                  thumbnail={movie.image.url}
                  owner={currentUser._id}
                  movieId={movie.id}
                  nameRU={movie.nameRU}
                  nameEN={movie.nameEN}
                />
              );
            })}
          </React.Fragment>
        )}
      </section>
      {!areAllMoviesShown && (
        <div
          className="movieCardList__button-container"
          onClick={showMoreMovies}
        >
          <button type="button" className="movieCardList__button">
            Еще
          </button>
        </div>
      )}
    </>
  );
}

export default MoviesCardList;
