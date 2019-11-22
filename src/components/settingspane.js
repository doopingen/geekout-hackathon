import React from 'react';

const SettingsPane = props => {

    return (
        <div className="settings">
            <h1>Settings</h1>
            <div>
            <p>&nbsp;</p>
            <p id="settingsSoundEffects" className="settings-item settings-item-name" onClick={props.handleChange}>Sound Effects <span id="soundValue" className="settings-item-value">{props.soundEffects ? 'On' : 'Off'}<span id="soundCarat" className="carat">></span></span></p>
            <p id="settingsLanguage" className="settings-item settings-item-name" onClick={props.handleChange}>Language <span id="languageValue" className="settings-item-value">{props.language}<span id="languageCarat" className="carat">></span></span></p>
            <p id="settingsTeamsCount" className="settings-item settings-item-name" onClick={props.handleChange}>Teams <span id="teamsValue" className="settings-item-value">{props.teams}<span id="teamsCarat" className="carat">></span></span></p>
            <p id="settingsTimeLimit" className="settings-item settings-item-name" onClick={props.handleChange}>Time Limit Per Round <span className="settings-item-value">60 sec</span></p>
            <p id="settingsRounds" className="settings-item settings-item-name" onClick={props.handleChange}>Rounds <span className="settings-item-value">5</span></p>
            </div>
            <p></p>
            <div id="navPrev" className="pane-nav-prev" onClick={props.handleChange}>
                <p>Rules</p>
            </div>
 
            <div id="navNext" className="pane-nav-next" onClick={props.handleChange}>
                <p>Select Theme</p>
            </div>
        </div>
    )
}

export default SettingsPane;