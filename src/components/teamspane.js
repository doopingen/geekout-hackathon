import React from 'react';

const TeamsPane = props => {

    return (
        <div className="teams">
            <h1>Teams</h1>
            <p onClick={props.handleTeamsUp} value="5">Rules</p>
            <div className="pane-nav-prev" onClick={props.handleGameStateTheme}>
                <p>Theme</p>
            </div>
 
            <div className="pane-nav-next" onClick={props.handleGameStateStart}>
                <p>Play!</p>
            </div>

        </div>
    )
}

export default TeamsPane;