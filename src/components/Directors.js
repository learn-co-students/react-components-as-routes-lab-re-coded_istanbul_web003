import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const displayDirectors = ()=> {return directors.map(
    director=> (
       <div>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(mov=><li>{mov}</li>)}
        </ul>
      </div>
    )
    )
    
  }
  console.log("direc",directors)
  return (
    
    <div>
      <h1>Directors Page</h1>
     {displayDirectors()}
    </div>
  );
}

export default Directors
