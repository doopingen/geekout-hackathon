import React, { useState, useEffect } from 'react';

const GameTimer = () => {
    const [turnTimer, setTurnTimer] = useState(0);

    useEffect(() => {
        setInterval(() => { setTurnTimer(turnTimer + 1)}, 1000) 
        return () => {
          clearInterval(turnTimer)
        }
      }, []) 

      return (
          <>
            <p>{turnTimer}</p>
          </>
      )
}

export default GameTimer