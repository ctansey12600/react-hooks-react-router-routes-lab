import React from "react";
import { directors } from "../data";

function Directors() {
  const collection = directors.map((director) => {
    return (
    <div key={director.name}>
      <p>{director.name}</p>
      <ul>{director.movies.map((movie) => <li key={movie}>{movie}</li>)}</ul>
    </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {collection}
    </div>
    )
}

export default Directors;
