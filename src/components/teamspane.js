import React from 'react';

const TeamsPane = props => {

    return (
        <div className="teams">
            <h1>Teams</h1>
            <p>Rules</p>
            <div className="pane-nav-prev" onClick={props.handleGameStatePrev}>
                <p>Themes</p>
            </div>
 
            <div className="pane-nav-next" onClick={props.handleGameStateNext}>
                <p>Settings</p>
            </div>

        </div>
    )
}

export default TeamsPane;