import MovieCard from "./MovieCard";


const MovieScreen = ({ list, setPage, page, movieList }) => {
  const movieDisplay = movieList.map((movie, index) => {
    return <h2>{movie.original_title}</h2>
  });

  return (
    <div>
      <h1>Macey's Movie Theater</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
