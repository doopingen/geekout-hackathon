import React from 'react';

const SettingsPane = props => {

    return (
        <div className="settings">
            <h1>Settings</h1>
            <p>Sound</p>
            <div className="pane-nav-prev" onClick={props.handleGameStatePrev}>
                <p>Themes</p>
            </div>
 
            <div className="pane-nav-next" onClick={props.handleGameStateNext}>
                <p>Set up Teams</p>
            </div>
        </div>
    )
}

export default SettingsPane;