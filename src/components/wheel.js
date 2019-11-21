import React from 'react';

const Wheel = props => {

    const numSpokes = props.characters.length;

    return (
        <>
            <div className="wheel-container">
                {   props.characters.map((character, i) => {
                        const rotation = {transform: `translate(-50%, -50%) rotate(${((360 / numSpokes) * i) + 45}deg)`};
                        return (
                            <div key={i} className="wheel-spoke-container" style={rotation}>
                                <h1>{character}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className="marker"></div>
        </>
    )
}

export default Wheel;