import { useState, useEffect } from "react";

export default function AppMain({ filmsArray, genres }) {
    const [films, setFilms] = useState(filmsArray);
    const [newTitle, setNewTitle] = useState('');
    const [newFilmGenre, setNewFilmGenre] = useState('');
    const [searchQueryGenre, setSearchQueryGenre] = useState('default');
    const [searchQueryTitle, setSearchQueryTitle] = useState('');
    const [filteredFilms, setFilteredFilms] = useState([]);

    useEffect(() => {
        //NOTE: filtrare gli elementi che hanno ciò che inserisco nel select
        if (searchQueryGenre === 'default') {
            setFilteredFilms(films)
        } else {
            const filtered = films.filter(film => film.genre.includes(searchQueryGenre));
            setFilteredFilms(filtered)
        }
    }, [searchQueryGenre, films])

    //NOTE: Lo riuseremo per filtrare i titoli
    useEffect(() => {
        //NOTE: filtrare gli elementi che hanno ciò che inserisco nell'input
        const filtered = films.filter(film => film.title.includes(searchQueryTitle));
        setFilteredFilms(filtered)
    }, [searchQueryTitle, films])

    function handleSubmit(e) {
        e.preventDefault();

        if (newTitle.trim() === '' && newFilmGenre.trim() === '') {
            return;
        }

        const newFilm = {
            title: newTitle.trim(),
            genre: newFilmGenre.trim()
        };

        setFilms([
            ...films,
            { id: Date.now(), title: newTitle, genre: newFilmGenre }
        ]); //INFO: Uso Date.now() per creare un id univoco in base alla data
        setNewTitle('');
        setNewFilmGenre('');
    };

    function handleClickRemove(id) {
        setFilms(prev => prev.filter(film => film.id !== id));
    }

    return (
        <>
            <input className="container form-control my-2 py-2 ps-4 mx-auto" placeholder="Cerca un titolo" type="text" value={searchQueryTitle} onChange={(e => setSearchQueryTitle(e.target.value))} />
            <select className="form-select container my-4 ms-auto py-3 px-4" aria-label="Default select example" value={searchQueryGenre} onChange={(e => setSearchQueryGenre(e.target.value))}>
                <option value='default'>Seleziona il genere da ricercare</option>
                <option value="Azione">Azione</option>
                <option value="Avventura">Avventura</option>
                <option value="Animazione">Animazione</option>
                <option value="Commedia">Commedia</option>
                <option value="Documentario">Documentario</option>
                <option value="Drammatico">Drammatico</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Musicale">Musicale</option>
                <option value="Mistero">Mistero</option>
                <option value="Romantico">Romantico</option>
                <option value="Thriller">Thriller</option>
                <option value="Western">Western</option>
            </select>
            <ul className="list-group list-unstyled d-flex justify-content-between container">
                {filteredFilms.map(film => {
                    return (
                        <li key={film.id} className="list-group-item py-3 ps-4 ms-3 fs-5 d-flex justify-content-between align-items-center">Titolo: {film.title}
                            <br />
                            Genere: {film.genre}
                            <div>
                                <button className="btn btn-outline-danger" onClick={() => handleClickRemove(film.id)}><i className="bi bi-trash px-1">Elimina</i></button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <form className='container mb-5' onSubmit={handleSubmit}>
                <h2 className="container my-3 mx-auto">AGGIUNGI UN NUOVO FILM</h2>
                <div className="d-flex">
                    <input className="form-control py-1 ps-4 ms-1" placeholder="Aggiungi il titolo del film" type="text" value={newTitle} onChange={(e => setNewTitle(e.target.value))} />
                    <input className="form-control py-1 ps-4 ms-1" placeholder="Aggiungi il genere del film" type="text" value={newFilmGenre} onChange={(e => setNewFilmGenre(e.target.value))} />
                    <button className="btn btn-outline-primary  ms-1 py-2" type="submit"><i className="bi bi-floppy">Salva</i></button>
                </div>
            </form>
        </>
    )
};



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