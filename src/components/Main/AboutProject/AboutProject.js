import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project-info">
      <div className="project-info__wrapper">
        <h2 className="project-info__header">О проекте</h2>
        <div className="graduation">
          <div className="graduation__wrapper">
            <h3 className="graduation__header">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="graduation__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="graduation__wrapper">
            <h3 className="graduation__header">
              На выполнение диплома ушло 5 недель{' '}
            </h3>
            <p className="graduation__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="progress">
          <div className="progress__backend">
            <p className="progress-duration progress__duration_week">
              1 неделя
            </p>
            <p className="progress__title">Back-end</p>
          </div>
          <div className="progress__frontend">
            <p className="progress__duration progress__duration_weeks">
              4 недели
            </p>
            <p className="progress__title">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
