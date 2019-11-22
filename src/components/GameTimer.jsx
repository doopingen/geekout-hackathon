import React, { useState, useEffect } from 'react';
import { tsPropertySignature } from '@babel/types';

const GameTimer = (props) => {

    // useEffect(() => {
    //     if (props.playState === 1) {
    //       const interval = setInterval(() => {
    //           console.log(`tick ${props.turnTime}`)
    //         }, 1000);
    //       // return () => {
    //       //   clearInterval(interval);
    //       // }
    //     }
    //   }, [props.playState]) 

      let display = <></>;
      console.log(`state: ${props.playState}`)
      switch (props.playState) {
        case 0:
        case 2:
          display = <div id="phase0" onClick={props.handleChange}>Start Timer</div>;
          break;
        case 1:
          display = <div>{props.turnTime}</div>
          break;
      }


      return (
          <>
            <p>{display}</p>
          </>
      )
}

export default GameTimer