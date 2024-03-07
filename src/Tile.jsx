import React from 'react';
import VoteButton from "./VoteButton.jsx";

function Tile({title, description, recipe}) {
    return (
        <div className="tile">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <p>{recipe}</p>
            <div className="tile-buttons">
                <VoteButton text="Like"/>
                <VoteButton text="Dislike"/>
            </div>
        </div>
    );
}

export default Tile;