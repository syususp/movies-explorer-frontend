import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MovieCard from '../../components/MoviesCard/MoviesCard';
import Header from '../Header/Header';
import { getSaveMovies, deleteSaveMovies } from '../../utils/MainApi';

function SavedMovies({ isLoggedIn }) {
  const storedQuerySavedMovies =
    localStorage.getItem('storedQuerysavedMovies') || '';
  const storedCheckboxStateSavedMovies = JSON.parse(
    localStorage.getItem('storedCheckboxStatesavedMovies'),
  );

  const [savedMovies, setSavedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(storedQuerySavedMovies || '');
  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(
    storedCheckboxStateSavedMovies !== null
      ? storedCheckboxStateSavedMovies
      : false,
  );

  useEffect(() => {
    getSaveMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((error) => {
        console.error('Error fetching saved movies:', error);
      });
  }, []);

  const handleDeleteMovie = (movieId) => {
    deleteSaveMovies(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter((movie) => movie._id !== movieId));
      })
      .catch((error) => {
        console.error('Error deleting saved movie:', error);
      });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = savedMovies
    .filter((movie) =>
      movie.nameRU.toLowerCase().includes((searchQuery || '').toLowerCase()),
    )
    .filter((movie) => !isShortMoviesChecked || movie.duration <= 40);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          onSearch={handleSearch}
          onQueryChange={setSearchQuery}
          onCheckboxChange={setIsShortMoviesChecked}
          isChecked={isShortMoviesChecked}
          page="savedMovies"
        />

        <section className="savedMovieCardList">
          {filteredMovies.map((movie) => {
            return (
              <MovieCard
                fromSavedMovie={true}
                key={movie._id}
                image={movie.image}
                thumbnailUrl={movie.thumbnail}
                movieUrl={movie.trailerLink}
                altText={movie.nameRU}
                movieName={movie.nameRU}
                movieDuration={movie.duration}
                onDelete={() => handleDeleteMovie(movie._id)}
                country={movie.country}
                director={movie.director}
                year={movie.year}
                description={movie.description}
                movieId={movie.movieId}
                nameRU={movie.nameRU}
                nameEN={movie.nameEN}
                owner={movie.owner}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
