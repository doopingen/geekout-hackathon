import React from 'react';

const HomePane = props => {

    return (
        <div className="home">
            <h2></h2>
            <img src="./img/picard.png" alt="" /><br />
            <div>
                <h2 className="mgn-btm-0">Welcome to Naboo!</h2>
                <p className="mgn-top-0">The best word guessing game<br /> in the universe!</p>
                <p className="mgn-0">Your mission is to act out a word,<br /> in character, for your team to guess</p>
                <h4 className="mgn-top-0">Good Luck!</h4>
                <p className="mgn-btm-0">If you are new to Naboo, <br />please go to the game rules first</p>
            </div>
            <p id="buttonRules" className="pane-button" onClick={props.handleChange}>View Rules</p><br />
            <p id="buttonSettings" className="pane-button" onClick={props.handleChange}>Go to Settings</p><br />
            <p id="buttonStart" className="pane-button" onClick={props.handleChange}>Start Playing</p><br />

            {/* <div id="navNext" className="pane-nav-next" onClick={props.handleChange}>
                <p id="navNextText">Rules</p>
            </div> */}
        </div>
    )
}

export default HomePane;