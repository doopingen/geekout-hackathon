import React, { useState, useEffect } from 'react';
import Wheel from './wheel'; 
import TeamScore from './TeamScore'; 
import GameTimer from './GameTimer'; 
import GameWord from './GameWord'; 
import { statement } from '@babel/template';

const Game = (props) => {
    // props.playState - phase of in-round play
    // props.currentTeam - who is playing
    // props.currentRound - which round is it (starting at 1)
    // props.currentWord - the word selected when

    // playstate 0 - show word, show start timer button
    // playstate 1 - replace word with solved! button, replace timer button with timer
    // playstate 2 - if solved, update score. reset start timer button, replace word with spin button
    // goto playstate 0 until #rounds is reached

    const [turnTimerActive, setTurnTimerActive] = useState(0);
    
    // const spinDelay = setTimeout(() => {
    //     alert('Testing');
    //   }, 10000);

    return (
        <div className="teams">
            <Wheel  gameData={props.gameData}
                    colors={props.colors}
                    wheelcss={props.wheelcss}
                    playState={props.playState}
            />
            <h1>{props.teamNames[props.currentTeam]}</h1>
            <h2>Round {props.currentRound}</h2>
            <p>Score {props.teamScores[props.currentTeam]}</p>
            <GameTimer playState={props.playState} turnTime={props.turnTime} handleChange={props.handleChange} />
            <GameWord playState={props.playState} currentWord={props.currentWord} handleChange={props.handleChange} />
            {/* <p onClick={props.handleChange} value="5"></p>
            <div className="pane-game-left">
            </div>
            <div className="pane-game-right" >
                <div className="teamscore">
                    <TeamScore 
                        teamNames={props.teamNames}
                        teamScores={props.teamScores}
                    />
                </div>
                <div className="wordarea">  
                    {gamePhase === 1 ? (
                        <GameWord words={props.words}/>
                            ) : (
                        <p>Word123435</p>
                    )}
                </div>
                <div className="spinstart">
                    {gamePhase === 0 ? (
                        <button className="green-btn" onClick={firstPhase}>Spin</button>
                            ) : (
                        <button className="green-btn" onClick={secondPhase}>Start Timer</button>
                    )}
                </div>
            </div> */}
        </div>
    )
}

export default Game;