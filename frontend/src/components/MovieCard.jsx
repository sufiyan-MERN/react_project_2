import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/movieContext";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorites } =
    useMovieContext();
  const favorite = isFavorites(movie.id);

  function onFavoriteClick(e) {
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title || "Movie poster"} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title || "Untitled movie"}</h3>
        <p>{movie.release_date?.split("-")[0] ?? "N/A"}</p>
      </div>
    </div>
  );
}

export default MovieCard;
