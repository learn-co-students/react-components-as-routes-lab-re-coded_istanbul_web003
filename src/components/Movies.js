import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.time}</p>
            <ul>
              <li>{movie.genres}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
