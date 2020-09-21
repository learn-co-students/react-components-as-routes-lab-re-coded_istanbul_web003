import React from 'react';
import { directors } from '../data';

const directorList = () => {
  return (
    directors.map(director => 
    <div key={director.name}>
      <h3>Name: {director.name}</h3>
      <p>Movies:</p>
      <ul>
        {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>)
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList()}
    </div>
  );
}

export default Directors
