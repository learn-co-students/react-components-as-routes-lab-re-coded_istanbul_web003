import React from 'react';
import { actors } from '../data';
const Actors = () => {
  const displayActors = ()=> {return actors.map(
    actor=> (
       <div>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map(mov=><li>{mov}</li>)}
        </ul>
      </div>
    )
    )
    
  }
  
  return (
    
    <div>
      <h1>Actors Page</h1>
     {displayActors()}
    </div>
  );
}

export default Actors;
