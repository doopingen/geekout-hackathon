import React from 'react';

const RulesPane = props => {

    return (
        <div className="settings">
            <h1>Rules</h1>
            <p>Deez are da Rulz</p>
            <div className="pane-nav" onClick={props.handleGameState}>
                <p>Choose a Theme</p>
            </div>
         </div>
    )
}

export default RulesPane;