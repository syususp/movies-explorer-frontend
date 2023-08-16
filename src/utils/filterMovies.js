export const filterMovies = (movies, query = '', isShortMoviesChecked) => {
  query = query || '';
  const filteredMovies = movies.filter((movie) => {
    const matchesQuery =
      movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(query.toLowerCase());

    if (isShortMoviesChecked) {
      return matchesQuery && movie.duration <= 40;
    }
    return matchesQuery;
  });
  return filteredMovies;
};
