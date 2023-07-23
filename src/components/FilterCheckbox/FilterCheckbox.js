import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <div className="toggle round">
        <input type="checkbox" className="checkbox__input" id="checkbox" />
        <label for="checkbox" className="switch"></label>
      </div>
      <span className="checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
