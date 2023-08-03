import React from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';
import words33 from '../../images/33words.png';
import let100 from '../../images/100let.png';
import benksy from '../../images/banksy.png';
import baskiya from '../../images/baskiya.png';
import beg from '../../images/beg.png';
import booksales from '../../images/booksales.png';
import aboutGermany from '../../images/aboutGermany.png';
import iggy from '../../images/iggi.png';
import djenis from '../../images/djenis.png';
import beforeJump from '../../images/beforeJump.png';
import dogCalled from '../../images/dogCalled.png';
import sound from '../../images/sound.png';

function MoviesCardList() {
  return (
    <section className="movieCardList">
      <MovieCard
        imageUrl={words33}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина 33 слова о дизайне'
        movieName='33 слова о дизайне'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={let100}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='Киноальманах 100 лет дизайна'
        movieName='Киноальманах «100 лет дизайна»'
        movieDuration='1ч 3м'
      />

      <MovieCard
        imageUrl={benksy}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина В погоне за Бенкси'
        movieName='В погоне за Бенкси'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={baskiya}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина Баския - Взрыв реальности'
        movieName='Баския: Взрыв реальности'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={beg}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина Бег это свобода'
        movieName='Бег это свобода'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={booksales}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина Книготорговцы'
        movieName='Книготорговцы'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={aboutGermany}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина Когда я думаю о Германии ночью'
        movieName='Когда я думаю о Германии ночью'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={iggy}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина Gimme Danger: История Игги и The Stooge'
        movieName='Gimme Danger: История Игги и The Stooge'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={djenis}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина Дженис: Маленькая девочка грустит'
        movieName='Дженис: Маленькая девочка грустит'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={beforeJump}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина Соберись перед прыжком'
        movieName='Соберись перед прыжком'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={dogCalled}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина Пи Джей Харви: A dog called money'
        movieName='Пи Джей Харви: A dog called money'
        movieDuration='1ч 47м'
      />

      <MovieCard
        imageUrl={sound}
        movieUrl='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        altText='картина По волнам: Искусство звука в кино'
        movieName='По волнам: Искусство звука в кино'
        movieDuration='1ч 47м'
      />
    </section>
  );
}

export default MoviesCardList;
