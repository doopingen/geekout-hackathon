import React, { useState, useEffect } from 'react';

const GameTimer = () => {
    const [turnTimer, setTurnTimer] = useState(0);

    const setTimer = () => {
        setTurnTimer(60)
    }

    useEffect(() => {
        setTimer()
        const interval = setInterval(() => {
            setTurnTimer(turnTimer => turnTimer - 1);
          }, 1000);
        return () => {
          clearInterval(interval)
        }
      }, []) 

      return (
          <>
            <p>{turnTimer}</p>
          </>
      )
}

export default GameTimer