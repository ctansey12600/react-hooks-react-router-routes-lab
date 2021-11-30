import React from "react";
import { actors } from "../data";

function Actors() {
  const collection = actors.map((actor) => {
    return (
    <div key={actor.name}>
      <p>{actor.name}</p>
      <ul>{actor.movies.map((movie) => <li key={movie}>{movie}</li>)}</ul>
    </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {collection}
    </div>
    )
}

export default Actors;
