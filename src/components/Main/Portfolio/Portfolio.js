import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Портфолио</h1>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/syususp/mesto"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <p className="portfolio__link-icon"></p>
          </a>
        </li>

        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/syususp/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <p className="portfolio__link-icon"></p>
          </a>
        </li>

        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/syususp/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <p className="portfolio__link-icon"></p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
