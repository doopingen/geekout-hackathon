import React from 'react';

const SettingsPane = props => {

    return (
        <div className="settings">
            <h1>Settings</h1>
            <div>
                <p>&nbsp;</p>
                <p id="settingsSoundEffects" className="settings-item settings-item-name" onClick={props.handleChange}>Sound Effects <span className="settings-item-value">{props.soundEffects ? 'On' : 'Off'}<span className="carat">></span></span></p>
                <p id="settingsLanguage" className="settings-item settings-item-name" onClick={props.handleChange}>Language <span className="settings-item-value">{props.language}<span className="carat">></span></span></p>
                <p id="settingsTeamsCount" className="settings-item settings-item-name" onClick={props.handleChange}>Teams <span className="settings-item-value">{props.teams}<span className="carat">></span></span></p>
                <p id="settingsTimeLimit" className="settings-item settings-item-name" onClick={props.handleChange}>Time Limit Per Round <span className="settings-item-value">{props.timeLimit} sec<span className="carat">></span></span></p>
                <p id="settingsRounds" className="settings-item settings-item-name" onClick={props.handleChange}>Rounds <span className="settings-item-value">{props.rounds}<span className="carat">></span></span></p>
            </div>
            <div id="navPrev" className="rules-setting-continue" onClick={props.handleChange}>
                <p onClick={props.handleChange}>Rules</p>
            </div>
            <div id="navNext" className="rules-setting-continue" onClick={props.handleChange}>
                <p onClick={props.handleChange}>Select Theme</p>
            </div>
        </div>
    )
}

export default SettingsPane;