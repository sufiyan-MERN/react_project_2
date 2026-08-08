import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return 
    setLoading(true)
    try {
      const searchResults= await searchMovies(searchQuery)
    } catch (err) {
      console.log(err);
      setError("fialed to search movies...")
    }
    finally{
      setLoading(false)
    }
  };

  const filteredMovies = movies.filter((movie) => {
    const title = movie.title?.toLowerCase() ?? "";
    const query = searchQuery.toLowerCase();
    return title.includes(query);
  });

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? <div className="loading">Loading...</div>: <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>}

      
    </div>
  );
}

export default Home;
