import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import filmsArray from './db/filmsArray';


function App() {

  return (
    <>
      <AppHeader />
      <AppMain filmsArray={filmsArray} />
      <AppFooter />
    </>
  )
}

export default App

