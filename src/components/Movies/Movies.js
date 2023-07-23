import React from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

function Movies() {
  return (
    <>
      <Header />

      <main className="main">
        <SearchForm />
        <MoviesCardList />
        <div className="main__button-container">
          <button type="button" className="movies-button">
            Еще
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
