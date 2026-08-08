import { Children, createContext, useContext, useEffect, useState } from "react";

const movieContext= createContext()

export const UseMovieContext=()=> useContext(movieContext)

export const movieProvider= ({Children})=>{
    const [favorites,setFavorites]=useState([])

    useEffect(()=>{
        const storedFavs=localStorage.getItem("Favorites")
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem("Favorites",JSON.stringify(favorites))
    },[favorites])

    return <movieContext.Provider>
        {Children}
    </movieContext.Provider>
}