import React from 'react';

const HomePane = props => {

    return (
        <div className="home">
            <h1>Naboo!</h1>
            <h2></h2>
            <img src="./img/picard.png" alt="" /><br />
            <p className="pane-button" onClick={props.handleGameStateRules}>Game Rules</p><br />
            <p className="pane-button" onClick={props.handleGameStateSettings}>Game Settings</p><br />
            <p className="pane-button" onClick={props.handleGameStateStart}>Start</p><br />
            <div className="pane-nav-next" onClick={props.handleGameStateRules}>
                <p>Rules</p>
            </div>
        </div>
    )
}

export default HomePane;