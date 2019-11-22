import React from 'react';

const SettingsPane = props => {

    return (
        <div className="settings">
            <h1>Settings</h1>
            <p>Sound</p>
            <div className="pane-nav-prev" onClick={props.handleGameStateRules}>
                <p>Rules</p>
            </div>
 
            <div className="pane-nav-next" onClick={props.handleGameStateTheme}>
                <p>Select Theme</p>
            </div>
        </div>
    )
}

export default SettingsPane;