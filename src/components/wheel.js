import React from 'react';


const Wheel = props => {

    const trekThemeData = props.trekData.trekTheme
    const numSpokes = trekThemeData.characters.length;
    const numColors = props.colors.length;

    return (
        <div className="wheel-container">
            <div className="wheel">
                {   trekThemeData.characters.map((character, i) => {
                        const rotation = {
                            transform: `translate(-50%, -50%) rotate(${((360 / numSpokes) * i) + 45}deg)`,
                            backgroundColor: `${props.colors[i % numColors]}`
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