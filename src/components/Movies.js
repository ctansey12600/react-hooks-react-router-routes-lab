import React from "react";
import { movies } from "../data";

function Movies() {
  const collection = movies.map((movie) => {
    return (
    <div key={movie.title}>
      <p>{movie.title}</p>
      <p>{movie.time}</p>
      <ul>{movie.genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
    </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {collection}
    </div>
    )
}

export default Movies;
