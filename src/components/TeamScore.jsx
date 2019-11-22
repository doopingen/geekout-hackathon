import React from 'react';

const TeamScore = props => {

    return (
            <div className="scoretable">
                {
                    props.teamNames.map((team, i) => {
                        return(
                            <div className="gamecard-row">
                                <span>{props.teamNames[i]}</span>
                                <span className="gamecard-score">{props.teamScores[i]}</span>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default TeamScore

