import {Type, Search} from '../types'

const API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const getSearch = async ({query}: {query: FormDataEntryValue}) => {
    if (query === '') return null
    
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`) 
        const json = await response.json()
        const movies = json.Search

        return movies?.map((movie: Search) => ({
            id:  movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            type: movie.Type as Type
        }))
    } catch(e) {
        throw new Error("Error searching movie!");   
    } 
  }