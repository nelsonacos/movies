import { ImageWithFallback } from './ImageWithFallback'
import { MappedMovies } from '../types'

export function ListOfMovies({ movies }: { movies: MappedMovies[] }) {
    return (
        <ul className='grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 mx-auto w-4/5 mb-14'>
            {
                movies.map((movie: MappedMovies) => (
                    <li key={movie.id} className='mx-auto drop-shadow-lg rounded-2xl'>
                        <div className='py-4'>
                            <h3 className='text-xl dark:text-white'>{movie.title} ({movie.year})</h3>
                        </div>
                        <div>
                            <ImageWithFallback src={movie.poster} alt={movie.title} />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export function NoMoviesResult() {
    return (
        <div className='flex items-center h-80 text-center dark:text-white mx-auto w-4/5'>
            <p className='flex-auto text-3xl'>Oops movie not found!</p>
        </div>
    )
}

export function Movies({ movies, lastQuery }: { movies: MappedMovies[], lastQuery: string | null }) {
    const hasMovies = movies?.length > 0
    if (!lastQuery) return

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResult />
    )
}