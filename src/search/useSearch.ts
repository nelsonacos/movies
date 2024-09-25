import { ChangeEvent, useState, useCallback } from 'react'
import { getSearch } from './getSearch'
import debounce from 'just-debounce-it'

export function useSearch() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [lastQuery, setLastQuery] = useState<string | null>(null);

    const debouncedSearchMovies = useCallback(
        debounce(async (query: string) => {
            const movies = await getSearch({ query });
            setMovies(movies);
        }, 500),
        []
    );

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            const form = event.target as HTMLFormElement
            const { query } = Object.fromEntries(new window.FormData(form))
            if (query === ' ') return
            if (!query || typeof query !== 'string') return
            if (query === lastQuery) return
            setLoading(true)
            setError(null)
            setMovies(await getSearch({query}))
            setLastQuery(query);

        } catch(e) {
            setError(e instanceof Error ? e.message : 'unknown error')
        } finally {
            setLoading(false)
        }   
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value
        debouncedSearchMovies(query)
    }

    return {movies, handleFormSubmit, loading, error, handleInputChange}
}