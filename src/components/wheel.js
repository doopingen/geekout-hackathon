import React, { useEffect, useState }from 'react';


const Wheel = props => {
    var testArray = ['spock','bones','scotty','captain kirk']
    const themeData = props.gameData;
    console.log(`themeData`, themeData);
    const numSpokes = themeData.characters.length;
    const numColors = props.colors.length;

    useEffect(() => {
    }, []);

    return (
        <div className="wheel-container">
            <div id="wheelofdoom" className={props.wheelcss}>
                { themeData.characters.map((character, i) => {
                        const rotation = {
                            transform: `translate(-50%, -50%) rotate(${((360 / numSpokes) * i) + 45}deg)`
                        };
                        return (
                            <div key={i} className="wheel-spoke-container" style={rotation}>
                                <h1>{character.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className="marker"></div>
        </div>
    )
}

export default Wheel;