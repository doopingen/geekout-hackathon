import React from 'react';

const HomePane = props => {

    return (
        <div className="home">
            <h1>Naboo!</h1>
            <img src="./img/picard.png" alt="" />

            <div className="pane-nav-next" onClick={props.handleGameStateNext}>
                <p>Rules</p>
            </div>
        </div>
    )
}

export default HomePane;