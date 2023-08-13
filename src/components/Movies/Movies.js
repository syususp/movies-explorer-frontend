import React, { useState, useEffect } from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

function Movies({ isLoggedIn }) {
  const storedQuery = localStorage.getItem('storedQuery');
  const storedCheckboxState = JSON.parse(localStorage.getItem('storedCheckboxState'));

  const [query, setQuery] = useState(storedQuery || '');
  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(storedCheckboxState || false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm
          onQueryChange={setQuery}
          onCheckboxChange={setIsShortMoviesChecked}
          isChecked={isShortMoviesChecked}
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
