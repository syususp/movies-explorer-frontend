import React, { useState, useEffect, useContext, useCallback } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { getMovies } from '../../utils/ApiFilm';
import { getSaveMovies } from '../../utils/MainApi';
import { filterMovies } from '../../utils/filterMovies';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCardList({
  query,
  isShortMoviesChecked,
  setQuery,
  setIsShortMoviesChecked,
}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [adjustedVisibleRows, setAdjustedVisibleRows] = useState(4);
  const [areAllMoviesShown, setAreAllMoviesShown] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const [savedMovies, setSavedMovies] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setError(null);

  //   Promise.all([getMovies(), getSaveMovies()])
  //     .then(([moviesData, savedMoviesData]) => {
  //       setMovies(moviesData);
  //       setSavedMovies(savedMoviesData);
  //       localStorage.setItem('storedMovies', JSON.stringify(moviesData));
  //       localStorage.setItem(
  //         'storedSavedMovies',
  //         JSON.stringify(savedMoviesData),
  //       );
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);
  
  const fetchMovies = useCallback(() => {
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
      const windowWidth = window.innerWidth;

      if (windowWidth > 1240) {
        setAdjustedVisibleRows(12);
      } else if (windowWidth > 480) {
        setAdjustedVisibleRows(8);
      } else {
        setAdjustedVisibleRows(5);
      }
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

    if (window.innerWidth <= 480) {
      increment = 1;
    } else if (window.innerWidth <= 1240) {
      increment = 2;
    } else {
      increment = 3;
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
