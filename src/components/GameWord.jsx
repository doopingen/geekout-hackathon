import React from 'react';

const GameWord = (props) => {

    let display = <></>;
    switch (props.playState) {
        case 0:
            display = <div>{props.currentWord}</div>
            break;
        case 1:
            display = <div id="phase1" onClick={props.handleChange}>Solve it!</div>
            break;
        case 2:
            display = <div>Spin!</div>;
            break;
    }

    return (
        <>
        <p>Your word...</p>
        <h3>{display}</h3>
        </>
    )
}

export default GameWord