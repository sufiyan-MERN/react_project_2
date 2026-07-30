const API_KEY="8e25a3b54d7e71e1686f108e0bd9cf4e"
const BASE_URL="https://www.themoviedb.org/movie"

export const getPopularMovies= async ()=>{
    const response=await fetch(`${BASE_URL}/populars?api_key=${API_KEY}`)
    const data= await response.json()
    return data.results
}

export const searchMovies= async (query)=>{
    const response=await fetch(`${BASE_URL}/search/movies?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data= await response.json()
    return data.results
}