import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MovieCard from '../../components/MoviesCard/MoviesCard';
import Header from '../Header/Header';
import { getSaveMovies, deleteSaveMovies } from '../../utils/MainApi';

function SavedMovies({ isLoggedIn }) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getSaveMovies()
      .then((data) => {
        setSavedMovies(data);
        console.log('savedmovies data =>', data);
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

  const filteredMovies = savedMovies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm onSearch={handleSearch} />

        <section className="savedMovieCardList">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              imageUrl={movie.image.url}
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
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
