import React from "react";
import Film from "./Film"

const ListOfFilms = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
         <Film key={film.id} url={film.url}> {film.name}</Film>
        );
    });

    return (
        <>
        {filmNodes}
        </>
    );
};

export default ListOfFilms;