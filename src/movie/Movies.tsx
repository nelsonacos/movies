import { MappedMovies } from '../types'

export function ListOfMovies({ movies }: { movies: MappedMovies[] }) {
    return (
        <ul className='grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 mx-auto w-4/5'>
            {
                movies.map((movie: MappedMovies) => (
                    <li key={movie.id} className='mx-auto'>
                        <div>
                            <h3 className='text-xl py-3 dark:text-white'>{movie.title} ({movie.year})</h3>
                        </div>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export function NoMoviesResult() {
    return (
        <div>Not search movies</div>
    )
}

export function Movies({ movies }: { movies: MappedMovies[] }) {
    const hasMovies = movies?.length > 0
    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResult />
    )
}