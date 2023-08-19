import React, { useState } from 'react';
import likeActive from '../../images/likeActive.svg';
import { Link } from 'react-router-dom';
import './MoviesCard.css';
import { saveMovies, deleteSaveMovies } from '../../utils/MainApi';

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}ч ${remainingMinutes}м`;
}

function MovieCard({
  fromSavedMovie,
  altText,
  movieDuration,
  country,
  director,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  owner,
  movieId,
  nameRU,
  nameEN,
  onDelete,
  isSaved,
}) {
  const [isSavedState, setIsSavedState] = useState(isSaved);
  const [movieMongoId, setMovieMongoId] = useState('');

  const handleSaveClick = () => {
    if (!isSavedState) {
      const movieData = {
        country,
        director,
        duration: movieDuration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        owner,
        movieId,
        nameRU,
        nameEN,
      };

      saveMovies(movieData)
        .then((response) => {
          setIsSavedState(true);
          setMovieMongoId(response._id);
        })
        .catch((error) => {
          console.error('Ошибка при сохранении: ', error);
        });
    } else {
      deleteSaveMovies(movieMongoId)
        .then(() => {
          setIsSavedState(false);
          onDelete();
        })
        .catch((error) => {
          console.error('Ошибка при удалении: ', error);
        });
    }
  };

  function getFullImageUrl(image) {
    const prefix = 'https://api.nomoreparties.co';
    if (image.startsWith(prefix)) {
      return image;
    }
    return `${prefix}${image}`;
  }

  return (
    <ul className="movie">
      <li className="movie__wrapper">
        <Link to={trailerLink} target={'_blank'} className="movie__link">
          <img
            className="movie__image"
            src={getFullImageUrl(image)}
            alt={altText}
          />
        </Link>
        <h3 className="movie__name">{nameRU}</h3>
        <p className="movie__duration">{formatDuration(movieDuration)}</p>
        {fromSavedMovie ? (
          <button
            className="movie__deleteButton"
            type="button"
            onClick={onDelete}
          ></button>
        ) : isSavedState ? (
          <img
            src={likeActive}
            alt="Saved"
            className="movie__likeButton"
            onClick={handleSaveClick}
          />
        ) : (
          <button
            className="movie__saveButton"
            type="button"
            onClick={handleSaveClick}
          >
            Сохранить
          </button>
        )}
      </li>
    </ul>
  );
}

export default MovieCard;
