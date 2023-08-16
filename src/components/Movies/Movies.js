import React, { useState, useCallback } from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

function Movies({ isLoggedIn }) {
  
  const storedQueryMovies = localStorage.getItem('storedQuerymovies') || '';
  const storedCheckboxStateMovies = JSON.parse(localStorage.getItem('storedCheckboxStatemovies'));
  const [query, setQuery] = useState(storedQueryMovies !== null ? storedQueryMovies : '');
  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(storedCheckboxStateMovies !== null ? storedCheckboxStateMovies : false);

  const handleQueryChange = useCallback((newQuery) => {
    setQuery(newQuery);
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm
          onQueryChange={handleQueryChange}
          onCheckboxChange={setIsShortMoviesChecked}
          isChecked={isShortMoviesChecked}
          page="movies"
        />
        <MoviesCardList
          query={query}
          isShortMoviesChecked={isShortMoviesChecked}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
