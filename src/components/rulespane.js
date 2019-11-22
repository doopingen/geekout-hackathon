import React from 'react';

const RulesPane = props => {

    return (
        <div className="settings">
            <h1>Rules</h1>
            <h2>How to Play</h2>
            <ol>
                <li><strong>Form your teams.</strong><br />Decide on your number of teams on the Settings pane, then name your teams, and decide who is acting first.</li>
                <li><strong>Spin the wheel!</strong><br />It will land on your character and your key word(s) will appear. Don't share it with your teammates!</li>
                <li><strong>Start the timer.</strong><br />In character, act out or give your team clues without saying the key word(s). You win a point if your team guesses the key word(s) before the time runs out!</li>
            </ol>
            <div className="pane-nav-prev" onClick={props.handleGameStateHome}>
                <p>Home</p>
            </div>
            <div className="pane-nav-next" onClick={props.handleGameStateSettings}>
                <p>Settings</p>
            </div>
         </div>
    )
}

export default RulesPane;