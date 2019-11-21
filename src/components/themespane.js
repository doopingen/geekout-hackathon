import React from 'react';

const ThemesPane = props => {

    return (
        <div className="themes">
            <h1>Themes</h1>
            {props.themes.map((theme, i) => {
                return (
                    <>
                    <input type="radio" name="theme" value={i} />
                        {theme} <br/>
                    </>
                )
            })}
            <div className="pane-nav-prev" onClick={props.handleGameStatePrev}>
                <p>Rules</p>
            </div>
 
            <div className="pane-nav-next" onClick={props.handleGameStateNext}>
                <p>Game Settings</p>
            </div>
        </div>
    )
}

export default ThemesPane;