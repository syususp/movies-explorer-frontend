import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onQueryChange, onCheckboxChange, isChecked, page }) {
  const storedQuery = localStorage.getItem(`storedQuery${page}`);
  const [query, setQuery] = useState(storedQuery || '');
  const [error, setError] = useState('');

  useEffect(() => {
    onQueryChange(storedQuery);
  }, [storedQuery]);

  // const handleInputChange = (e) => {
  //   setError('');
  //   setQuery(e.target.value);
  //   onQueryChange(e.target.value);
  //   localStorage.setItem(`storedQuery${page}`, e.target.value);
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   if (!query.trim()) {
  //     setError('Нужно ввести ключевое слово');
  //     return;
  //   }

  //   setError('');

  //   localStorage.setItem(`storedQuery${page}`, query);
  //   onQueryChange(query);
  // };

  const handleInputChange = (e) => {
    setError('');
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError('Нужно ввести ключевое слово');
      return;
    }

    setError('');
    localStorage.setItem(`storedQuery${page}`, query);
    onQueryChange(query);
  };

  const handleCheckboxChange = (isChecked) => {
    onCheckboxChange(isChecked);
    localStorage.setItem(
      `storedCheckboxState${page}`,
      JSON.stringify(isChecked),
    );
  };

  return (
    <section className="searchform">
      <span className="searchform__error">{error}</span>
      <form
        className="searchform__container"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="searchform__wrapper">
          <input
            className="searchform__input"
            type="text"
            required
            placeholder="Фильм"
            value={query}
            onChange={handleInputChange}
          />

          <button type="submit" className="searchform__button"></button>
        </div>
        <FilterCheckbox isChecked={isChecked} onChange={handleCheckboxChange} />
      </form>
    </section>
  );
}

export default SearchForm;
