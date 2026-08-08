const API_KEY = "8e25a3b54d7e71e1686f108e0bd9cf4e";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  const data = await response.json();
  return data.results ?? [];
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  const data = await response.json();
  return data.results ?? [];
};
