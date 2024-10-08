import Logo from './logo/Logo'
import { SearchForm } from './search/SearchForm'
import { Helmet } from 'react-helmet';
import { Movies } from './movie/Movies'
import { MoviesSkeleton } from './movie/MoviesSkeleton'
import { useSearch } from './search/useSearch'
import './App.css'

function App() {
  const { loading, movies, handleFormSubmit, lastQuery } = useSearch()
  return (
    <>
      <Helmet>
        <body className="bg-gray-50 dark:bg-gray-700" />
      </Helmet>
      <header className='flex flex-col items-center gap-5 w-full py-8'>
        <div>
          <Logo />
        </div>
        <SearchForm handleFormSubmit={handleFormSubmit} />
      </header>
      <main>
        {
          loading ? <MoviesSkeleton /> : <Movies movies={movies} lastQuery={lastQuery} />
        }
      </main>
    </>
  )
}

export default App