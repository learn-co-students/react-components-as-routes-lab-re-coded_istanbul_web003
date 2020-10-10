import React from 'react';
import { actors } from '../data';

const Actors = () => {
  //console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
          <div>
            <p className="actor">{actor.name}</p>
            <ul>
              {actor.movies.map((movie) => (
                <li>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
    
  );
};

export default Actors;
