import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, onChange }) {
  const handleCheckboxChange = () => {
    const newState = !isChecked;
    onChange(newState);
  };

  return (
    <div className="filter-checkbox">
      <div className="toggle toggle__round">
        <input
          type="checkbox"
          className="toggle__input"
          id="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox" className="toggle__switch"></label>
      </div>
      <span className="filter-checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
