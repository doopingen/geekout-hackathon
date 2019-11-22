import React from 'react';

const TeamsPane = props => {
    const setTeamNum = (e) => {
        if (e.target.value === "1") {
            props.setTeams([{team: 1}]);
        }
        if (e.target.value === "2") {
            props.setTeams([{team: 1},{team: 2}]);
        }
        if (e.target.value === "3") {
            props.setTeams([{team: 1},{team: 2},{team: 3}]);
        }
    }

    return (
        <div className="teams">
            <h1>How many Teams?</h1>
            <select>
                <option value="0" onClick={setTeamNum}>0</option>
                <option value="1" onClick={setTeamNum}>1</option>
                <option value="2"onClick={setTeamNum}>2</option>
                <option value="3"onClick={setTeamNum}>3</option>
            </select> 
            <div className="teamnames"> 
                {
                    props.teams.map((team) => {
                        if(team.team === 1) {
                            return(
                                <input className="block" placeholder="Team 1" type="text" name="Team 1" onChange={e => props.setTeamName1(e.target.value)} value={props.teamName1}></input>
                            )
                        }
                        if(team.team === 2) {
                            return(
                                <input className="block" placeholder="Team 2" type="text" name="Team 2" onChange={e => props.setTeamName2(e.target.value)} value={props.teamName2}></input>
                            )
                        }
                        if(team.team === 3) {
                            return(
                                <input className="block" placeholder="Team 3" type="text" name="Team 3" onChange={e => props.setTeamName3(e.target.value)} value={props.teamName3}></input>
                            )
                        }   
                    })
                }
            </div>
            <p onClick={props.handleTeamsUp(5)} value="5">Rules</p>
            <div className="pane-nav-prev" onClick={props.handleGameStatePrev}>
                <p>Game Settings</p>
            </div>
            <div className="pane-nav-next" onClick={props.handleGameStateStart}>
                <p>Play!</p>
            </div>

        </div>
    )
}

export default TeamsPane;