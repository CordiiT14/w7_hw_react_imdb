import React, {useState} from "react";
import ListOfFilms from "../components/ListOfFilms";
import MoreFilms from "../components/MoreFilms";

const UpcomingFilmReleases = () => {

    const [films, setFilms] = useState(
        [
            {
                id: 1, 
                name: "Doctor Strange in the Multiverse of Madness (2022)",
                url: "https://www.imdb.com/title/tt9419884/?ref_=rlm"
            },
            {
                id: 2,
                name: "Jurassic World Dominion (2022)",
                url: "https://www.imdb.com/title/tt8041270/?ref_=rlm"
            },
            {
                id: 3,
                name: "Thor: Love and Thunder (2022)",
                url: "https://www.imdb.com/title/tt10648342/?ref_=rlm",
            },
            {
                id: 4,
                name: "Spider-Man: Across the Spider-Verse - Part One (2022)",
                url: "https://www.imdb.com/title/tt9362722/?ref_=rlm"
            },
            {
                id: 5,
                name: "Black Panther: Wakanda Forever (2022)",
                url: "https://www.imdb.com/title/tt9114286/?ref_=rlm"
            }
        ]
    )


    return(
        <>
        <h2>Upcoming Film Releases for UK</h2>
        <h3>(that Cordii cares about)</h3>
        <ListOfFilms films={films}/>
        <MoreFilms/>
        </>
    );
};

export default UpcomingFilmReleases;