import React from 'react';

const HomePane = props => {

    return (
        <div className="home">
            <h1>Naboo!</h1>
            <h2></h2>
            <img src="./img/picard.png" alt="" /><br />
            <p id="buttonRules" className="pane-button" onClick={props.handleChange}>Game Rules</p><br />
            <p id="buttonSettings" className="pane-button" onClick={props.handleChange}>Game Settings</p><br />
            <p id="buttonStart" className="pane-button" onClick={props.handleChange}>Start</p><br />
            <div id="navNext" className="pane-nav-next" onClick={props.handleChange}>
                <p id="navNextText">Rules</p>
            </div>
        </div>
    )
}

export default HomePane;