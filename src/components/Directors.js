import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
          {directors.map((director) => (
          <div>
            <p>{director.name}</p>
            {director.movies.map((e) => <li>{e}</li>)}
          </div>
        ))}
    </div>
  );
}

export default Directors
