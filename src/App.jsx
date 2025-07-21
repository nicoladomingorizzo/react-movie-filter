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

/*
Create un nuovo progetto React e implementate un sistema di filtro per una lista di film in base al genere.
Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.
Per oggi diamo priorità alla logica e alla gestione dello stato. Una volta funzionante, possiamo pensare allo stile!
Note
Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
Se non viene selezionato alcun genere, devono essere mostrati tutti i film.
BONUS:
Aggiungere un campo di ricerca per filtrare i film anche per titolo.
Creare un sistema per aggiungere nuovi film alla lista tramite un form.

*/