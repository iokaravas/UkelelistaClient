import React from 'react'
const CHORD_POS = ['G#','Fm,','F','D#','C7','C','Bb7','Bb','A#7','A#','G7']
const IMAGE_SIZE = 300

const getChordX = (chord) => {
    let xPos = CHORD_POS.indexOf(chord)

    // Make sure wrong ones won't show up
    if (xPos===-1) {
        xPos = IMAGE_SIZE * CHORD_POS.length * -1
    } else {
        xPos *= IMAGE_SIZE * -1
    }

    return xPos
}

const ChordOverlay = (props)=> {

    let chordStyle = {
        backgroundPositionY: 0,
        backgroundPositionX: getChordX(props.chord),
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('/img/chords.svg')",
        backgroundSize: `auto ${IMAGE_SIZE}px`,
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        position: 'fixed',
        overflow: 'hidden'
    }

    console.log(getChordX(props.chord))

    return (
        <div style={chordStyle}/>
    )
}

export default ChordOverlay