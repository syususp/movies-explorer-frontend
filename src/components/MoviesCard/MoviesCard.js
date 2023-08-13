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
  imageUrl,
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
        image: imageUrl,
        trailerLink,
        thumbnail,
        owner,
        movieId,
        nameRU,
        nameEN,
      };
console.log('movieDATA',movieData);
      saveMovies(movieData).then((response) => {
        setIsSaved(true);
        console.log(owner);
        console.log('imageURL in moviesCard: ', image);
      });
    } else {
      setIsSaved(false);
    }
  };

  return (
    <ul className="movie">
      <li className="movie__wrapper">
        <Link to={trailerLink} target={'_blank'} className="movie__link">
          <img
            className="movie__image"
            src={`https://api.nomoreparties.co${image}`}
            alt={nameRU}
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
