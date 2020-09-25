import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => <div key={index} >{movie.title} {movie.time} {movie.genres} {movie.metascore} </div>)}
    </div>
  );
};

export default Movies;
