import { useState, useEffect } from "react";

export default function AppMain({ filmsArray }) {
    const [films, setFilms] = useState(filmsArray);
    const [newFilm, setNewFilm] = useState('Aggiungi un nuovo film');

    function handleSubmit(e) {
        e.preventDefault();
        setFilms([...films, { id: Date.now(), title: newFilm }]) //INFO: Uso Date.now() per creare un id univoco in base alla data
    };

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