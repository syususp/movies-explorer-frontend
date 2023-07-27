import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__button">
        <a href="/#promo" className="navtab__link">
          О проекте
        </a>
      </li>
      <li className="navtab__button">
        <a href="/#techs" className="navtab__link">
          Технологии
        </a>
      </li>
      <li className="navtab__button">
        <a href="/#personal-info" className="navtab__link">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
