import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "ironman", release_date: "2018" },
    { id: 2, title: "spiderman", release_date: "2021" },
    { id: 3, title: "civil war", release_date: "2022" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };
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
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => {
          return (
            movie.title.toLowerCase().includes(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Home;
