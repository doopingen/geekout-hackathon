import React from 'react';

const TeamsPane = props => {

    return (
        <div className="teams">
            <h1>Teams</h1>
            <p onClick={props.handleTeamsUp(5)} value="5">Rules</p>
            <div className="pane-nav-prev" onClick={props.handleGameStatePrev}>
                <p>Game Settings</p>
            </div>
 
            <div className="pane-nav-next" onClick={props.handleGameStateNext}>
                <p>Play!</p>
            </div>

        </div>
    )
}

export default TeamsPane;