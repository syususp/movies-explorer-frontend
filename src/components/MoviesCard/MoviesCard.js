import React, { useState } from 'react';
import likeActive from '../../images/likeActive.svg';
import { Link } from 'react-router-dom';
import './MoviesCard.css';

function MovieCard({ imageUrl, movieUrl, altText, movieName, movieDuration }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <ul className="movie">
      <li className="movie__wrapper">
        <Link
          to={movieUrl}
          target={'_blank'}
          className="movie__link"
        >
          <img
            className="movie__image"
            src={imageUrl}
            alt={altText}
          />
        </Link>
        <h3 className="movie__name">{movieName}</h3>
        <p className="movie__duration">{movieDuration}</p>
        {isSaved ? (
          <img src={likeActive} alt="Saved" className="movie__likeButton" onClick={handleSaveClick} />
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
