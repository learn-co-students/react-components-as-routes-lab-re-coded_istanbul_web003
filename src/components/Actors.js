import React from 'react';
import { actors } from '../data';

const Actors = () => {
  //console.log(actors)
  return (
    <div className="actor">
      <h1>Actors Page</h1>
      {actors.map((actor, index) => <div key={index}>
        {actor.name}
        <ul>
          {actor.movies.map((movie, index) =>
            <li key={index}>
              {movie}
            </li>
          )}
        </ul>

      </div>)}
    </div>
  );
};

export default Actors;
