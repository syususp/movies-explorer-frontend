import React from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

function Movies(isLoggedIn) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <main className="movies">
        <SearchForm />
        <MoviesCardList />
        <div className="movies__button-container">
          <button type="button" className="movies__button">
            Еще
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
