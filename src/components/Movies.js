import React from 'react';
import { movies } from '../data';



const Movies = () => {
  const displayMovies = ()=> {return movies.map(
    movie=> (
       <div>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map(mov=><li>{mov}</li>)}
        </ul>
      </div>
    )
    )
    
  }
  console.log("movie",movies)
  return (
    
    <div>
      <h1>Movies Page</h1>
     {displayMovies()}
    </div>
  );
}
export default Movies;
