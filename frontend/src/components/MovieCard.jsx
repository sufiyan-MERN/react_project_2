import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("clicked");
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title || "Movie poster"} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
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
