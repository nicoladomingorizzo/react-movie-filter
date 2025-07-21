import { useState, useEffect } from "react";

export default function AppMain({ filmsArray }) {
    const [films, setFilms] = useState(filmsArray);
    const [newFilm, setNewFilm] = useState('Aggiungi un nuovo film');

    function handleSubmit(e) {
        e.preventDefault();
        setFilms([...films, { id: Date.now(), title: newFilm }]) //INFO: Uso Date.now() per creare un id univoco in base alla data
    };

    function handleClickRemove(id) {
        setFilms(prev => prev.filter(film => film.id !== id));
    }

    return (
        <>
            <ul className="list-group list-unstyled d-flex justify-content-between">
                {films.map(film => {
                    return (
                        <li key={film.id} className="list-group-item py-3 ps-4 ms-3 d-flex justify-content-between align-items-center">{film.title}
                            <div>
                                <button className="btn" onClick={() => handleClickRemove(film.id)}><i className="bi bi-trash px-1">Elimina</i></button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <input className="form-control mt-2 py-2 ps-4 ms-3" placeholder="Aggiungi un nuovo film" type="text" value={newFilm} onChange={(e => setNewFilm(e.target.value))} />
                    <button className="btn" type="submit"><i className="bi bi-floppy">Salva</i></button>
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