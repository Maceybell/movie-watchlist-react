import React from "react";

const MovieCard = ({ movie, movieList, page, setPage, list, addMovie }) => {
  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="poster"
        />
        <h3>{movie.original_title}</h3>
      </div>
      <button onClick={() => addMovie(movie)}>Add to List</button>
    </div>
  );
};

export default MovieCard;
