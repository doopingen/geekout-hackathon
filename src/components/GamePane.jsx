import React, { useState, useEffect } from 'react';
import Wheel from './wheel'; 
import TeamScore from './TeamScore'; 
import GameTimer from './GameTimer'; 
import GameWord from './GameWord'; 
import { statement } from '@babel/template';

const Game = (props) => {
    const [gamePhase, setGamePhase] = useState(0);
    const [turnTimerActive, setTurnTimerActive] = useState(0);

    const firstPhase = () => {
        setGamePhase(1);
        props.setWheelCss('wheel-spin')
    }

    const secondPhase = (props) => {
        setGamePhase(2)
    }

    useEffect(() => {
        
    }, []);
    
    // const spinDelay = setTimeout(() => {
    //     alert('Testing');
    //   }, 10000);

    return (
        <div className="teams">
            <Wheel trekData={props.trekData} colors={props.colors} wheelcss={props.wheelcss}/>

            <p onClick={props.handleTeamsUp(5)} value="5"></p>
            <div className="pane-game-left">
            </div>
            <div className="pane-game-right" >
                <div className="teamscore">
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
                <div className="wordarea">  
                    {gamePhase === 1 ? (
                        <GameWord words={props.words}/>
                            ) : (
                        <p>Word123435</p>
                    )}
                </div>
                <div className="timer">
                    {gamePhase === 2 ? (
                        <GameTimer />
                            ) : (
                        <p>Timer area..</p>
                    )}
                </div>
                <div className="spinstart">
                    {gamePhase === 0 ? (
                        <button className="green-btn" onClick={firstPhase}>Spin</button>
                            ) : (
                        <button className="green-btn" onClick={secondPhase}>Start Timer</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Game;