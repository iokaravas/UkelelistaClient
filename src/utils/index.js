export const parseJSONChords = (song) => {
    let chords = []

    if (typeof(song)==='string') {
        song = JSON.parse(song)
    }

    Object.keys(song).forEach((group)=>{
        song[group].chords.forEach((chord)=>{
            chord.time.forEach((step)=>{
                let chordObj = {
                    time: parseFloat(step.step),
                    name: chord.chord
                }
                chords.push(chordObj)
            })
        })
    })

    chords.sort((chordA, chordB)=>{
        return chordA.time - chordB.time
    })

    return chords
}

export const identifyChord = (time, chordsTimeline) => {

    for (let i = 0; i < chordsTimeline.length; i++) {
        let chord = chordsTimeline[i]
        if (chord.time >= time) {
            if (i===0) {
                return chord
            } else {
                return chordsTimeline[i-1]
            }
        }
    }

    return {from:0,to:0,name:''} // default
}