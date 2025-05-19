export default function addMovie({movies, movie}) {
    const movieList = movies.push({movie})
    setMovies((movieList));
  };