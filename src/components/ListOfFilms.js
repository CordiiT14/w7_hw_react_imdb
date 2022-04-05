import React from "react";
import Film from "./Film"

const ListOfFilms = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
         <li key={film.id}>
            <Film url={film.url}> {film.name}</Film>
        </li>
        );
    });

    return (
        <>
        {filmNodes}
        </>
    );
};

export default ListOfFilms;