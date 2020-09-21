import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div>
            <h3>{actor.name}</h3>
            <ul>
              <li>{actor.movies}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Actors;
