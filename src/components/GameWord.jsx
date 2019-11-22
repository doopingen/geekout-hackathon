import React from 'react';

const GameWord = (props) => {
    const randomWord = props.words.wordData[Math.floor((Math.random() * 100))]

    return (
        <>
        <h3>{randomWord}</h3>
        </>
    )
}

export default GameWord