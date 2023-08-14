import React, { useState } from 'react';
import likeActive from '../../images/likeActive.svg';
import { Link } from 'react-router-dom';
import './MoviesCard.css';
import { saveMovies } from '../../utils/MainApi';

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}ч ${remainingMinutes}м`;
}

function MovieCard({
  movieUrl,
  altText,
  movieName,
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
}) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    if (!isSaved) {
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

      console.log('movieData in moviesCard: ', movieData);
      saveMovies(movieData).then((response) => {
        setIsSaved(true);
      });
    } else {
      setIsSaved(false);
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
        {isSaved ? (
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
