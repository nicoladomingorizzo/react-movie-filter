import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import filmsArray from './db/filmsArray';
import genres from './db/genresArray';


function App() {

  return (
    <>
      <AppHeader />
      <AppMain filmsArray={filmsArray} genres={genres} />
      <AppFooter />
    </>
  )
}

export default App

