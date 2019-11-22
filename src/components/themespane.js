import React from 'react';

const ThemesPane = props => {

    console.log(`theme: ${props.selectedTheme}`)

    return (
        <div className="themes">
            <h1>Choose Theme</h1>
            {props.themes.map((theme, i) => {
                return (
                    <div key={i} className="theme-selection">
                        { (props.selectedTheme === i) ?
                            <input id={i} type="radio" name="theme" className="theme-input" value={i} onClick={props.handleChange} checked/>
                            :
                            <input id={i} type="radio" name="theme" className="theme-input" value={i} onClick={props.handleChange}/>
                        }
                        {theme} <br/>
                    </div>
                )
            })}
            <div id="navPrev" className="pane-nav-prev" onClick={props.handleChange}>
                <p>Settings</p>
            </div> 
            <div id="navNext" className="pane-nav-next" onClick={props.handleChange}>
                <p>Select Teams</p>
            </div>
        </div>
    )
}

export default ThemesPane;