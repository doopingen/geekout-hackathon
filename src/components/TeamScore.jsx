import React from 'react';

const TeamScore = props => {

    return (
            <div className="scoretable">
                {
                    props.teams.map((team) => {
                        if(team.team === 1) {
                            return(
                                <div className="gamecard-row">
                                    <span>{`Team ${props.teamName1}`}</span>
                                    <span className="gamecard-score">{props.team1Score}</span>
                                </div>
                            )
                        }
                        if(team.team === 2) {
                            return(
                                <div className="gamecard-row">
                                    <span>{`Team ${props.teamName2}`}</span>
                                    <span className="gamecard-score">{props.team2Score}</span>
                                </div>
                            )
                        }
                        if(team.team === 3) {
                            return(
                                <div className="gamecard-row">
                                    <span>{`Team ${props.teamName3}`}</span>
                                    <span className="gamecard-score">{props.team3Score}</span>
                                </div>
                            )
                        }   
                    })
                }
            </div>
    )
}

export default TeamScore

