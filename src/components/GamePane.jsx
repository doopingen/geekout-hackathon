import React, { useState, useEffect } from 'react';
import Wheel from './wheel'; 
import TeamScore from './TeamScore'; 
import GameTimer from './GameTimer'; 
import GameWord from './GameWord'; 
import { statement } from '@babel/template';

const Game = (props) => {
    const [gamePhase, setGamePhase] = useState(0);
    const [turnTimerActive, setTurnTimerActive] = useState(0);

    // const firstPhase = () => {
    //     if (gamePhase === 0) {
    //         return 
    //     }
    // }

    useEffect(() => {
        
    }, []);
    
    // const spinDelay = setTimeout(() => {
    //     alert('Testing');
    //   }, 10000);

    return (
        <div className="teams">
            <Wheel trekData={props.trekData} colors={props.colors}/>

            <p onClick={props.handleTeamsUp(5)} value="5"><GameWord words={props.words}/></p>
            <div className="pane-nav-prev">
                <GameTimer />
            </div>
            <div className="pane-game-right" >
                <TeamScore 
                    teams={props.teams}
                    teamName1={props.teamName1}
                    teamName2={props.teamName2}
                    TeamName3={props.teamName3}
                    team1Score={props.team1Score}
                    team2Score={props.team2Score}
                    team3Score={props.team3Score}            
                />
            </div>
        </div>
    )
}

export default Game;