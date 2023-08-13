import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { getMovies } from '../../utils/ApiFilm';

function MoviesCardList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adjustedVisibleRows, setAdjustedVisibleRows] = useState(4);
  const [areAllMoviesShown, setAreAllMoviesShown] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

  const showMoreMovies = () => {
    let increment;

    if (window.innerWidth <= 480) {
      increment = 1;
    } else if (window.innerWidth <= 1240) {
      increment = 2;
    } else {
      increment = 3;
    }

    if (adjustedVisibleRows + increment <= movies.length) {
      setAdjustedVisibleRows(adjustedVisibleRows + increment);
    } else {
      setAdjustedVisibleRows(movies.length);
      setAreAllMoviesShown(true);
    }
  };

  return (
    <>
    <section className="movieCardList">
      {isLoading && <Preloader />}
      {!isLoading && error && (
        <p>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}
      {!isLoading && !error && movies.length === 0 && <p>Ничего не найдено</p>}
      {!isLoading && !error && (
        <React.Fragment>
          {movies.slice(0, adjustedVisibleRows).map((movie) => (
            <MovieCard
              key={movie.id}
              imageUrl={movie.image.url}
              movieUrl={movie.trailerLink}
              altText={movie.nameRU}
              movieName={movie.nameRU}
              movieDuration={movie.duration}
            />
          ))}
          
        </React.Fragment>
      )}
    </section>
    {!areAllMoviesShown && (
      <div className="movieCardList__button-container" onClick={showMoreMovies}>
        <button type="button" className="movieCardList__button">
          Еще
        </button>
      </div>
    )}
    </>
  );
}

export default MoviesCardList;
