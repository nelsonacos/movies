import Logo from './Logo/Logo'
import { Helmet } from 'react-helmet';
import './App.css'

function App() {
  return (
    <>
      <Helmet>
        <body className="bg-gray-50 dark:bg-gray-700" />
      </Helmet>
      <header className='flex flex-col items-center gap-5 m-20'>
        <div>
          <Logo />
        </div>
        <form className="max-w-md mx-auto w-3/4">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Avengers, Star wars, Matrix..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:red-blue-700 dark:focus:ring-red-800">Search</button>
          </div>
        </form>
      </header>
    </>
  )
}

export default App