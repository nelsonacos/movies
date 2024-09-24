import Logo from './Logo/Logo'
import { Search } from './Search/Search'
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
        <Search />
      </header>
    </>
  )
}

export default App