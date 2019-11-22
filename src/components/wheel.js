import React, { useEffect, useState }from 'react';


const Wheel = props => {
    var testArray = ['spock','bones','scotty','captain kirk']
    const trekThemeData = props.trekData.trekTheme
    const numSpokes = trekThemeData.characters.length;
    const numColors = props.colors.length;

    const shuffle = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    useEffect(() => {
        shuffle(testArray)
    }, []);

    return (
        <div className="wheel-container">
            <div id="wheelofdoom" className={props.wheelcss}>
                {  testArray.map((character, i) => {
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