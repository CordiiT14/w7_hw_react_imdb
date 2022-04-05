import React from "react";

const Film = ({url, children}) => {

    return (
        <>
        <a href={url}>{children}</a>
        </>
    );
};

export default Film;