import React from "react";
import { directors } from "../data";

const Directors = () => {
  console.log(directors);
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((director) => (
          <div>
            <p>{director.name}</p>
              {director.movies.map((movie) => (
                <li>{movie}</li>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Directors;
