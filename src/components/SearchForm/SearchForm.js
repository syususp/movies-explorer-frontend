import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onQueryChange, onCheckboxChange, isChecked }) {
  const storedQuery = localStorage.getItem('storedQuery');
  const [query, setQuery] = useState(storedQuery || '');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onQueryChange(e.target.value);
    localStorage.setItem('storedQuery', e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('storedQuery', query);
    onQueryChange(query);
  };

  return (
    <section className="searchform">
      <form className="searchform__container" onSubmit={handleFormSubmit}>
        <div className="searchform__wrapper">
          <input
            className="searchform__input"
            type="text"
            required
            placeholder="Фильм"
            value={query}
            onChange={handleInputChange}
          />

          <button type="ыгиьше" className="searchform__button"></button>
        </div>

        <FilterCheckbox isChecked={isChecked} onChange={onCheckboxChange} />
      </form>
    </section>
  );
}

export default SearchForm;
