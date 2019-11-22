import React from 'react';

const TeamsPane = props => {

    return (
        <div className="teams">
            <h1>Team Names</h1>
            <div className="teamnames"> 
                <div id="team1">
                    <p>Team 1</p>
                    <input id="input1" type="text" value={props.teams[0]} onChange={props.handleChange} placeholder="Team 1 name" />
                </div>
                {(props.teamsCount >= 2) ?
                    <div id="team2">
                        <p>Team 2</p>
                        <input id="input2" type="text" value={props.teams[1]} onChange={props.handleChange} placeholder="Team 2 name" />
                    </div> : <></>
                }
                {(props.teamsCount === 3) ?
                    <div id="team3">
                        <p>Team 3</p>
                        <input id="input3" type="text" value={props.teams[2]} onChange={props.handleChange} placeholder="Team 3 name" />
                    </div> : <></>
                }
            </div>
            <div id="navPrev" className="pane-nav-prev" onClick={props.handleChange}>
                <p>Game Settings</p>
            </div>
            <div id="navNext" className="pane-nav-next" onClick={props.handleChange}>
                <p>Play!</p>
            </div>

        </div>
    )
}

export default TeamsPane;