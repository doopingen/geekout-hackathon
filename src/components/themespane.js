import React from 'react';

const ThemesPane = props => {

    const checkForThemeType = (e) => {
        if(e.target.value === "0") {
            props.setThemeStarTrek()
        } else {
            props.setThemeStarWars()
        }
    }

    return (
        <div className="themes">
            <h1>Themes</h1>
            {props.themes.map((theme, i) => {
                return (
                    <>
                    <input type="radio" name="theme" value={i} onClick={checkForThemeType}/>
                        {theme} <br/>
                    </>
                )
            })}
            <div className="pane-nav-prev" onClick={props.handleGameStateSettings}>
                <p>Settings</p>
            </div>
 
            <div className="pane-nav-next" onClick={props.handleGameStateTeams}>
                <p>Select Teams</p>
            </div>
        </div>
    )
}

export default ThemesPane;