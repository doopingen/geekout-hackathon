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
            <div className="pane-nav" onClick={props.handleGameState}>
                <p>Set Teams</p>
            </div>
        </div>
    )
}

export default ThemesPane;