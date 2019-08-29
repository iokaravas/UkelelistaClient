export const parseJSONChords = (song) => {
    let chords = []
    let rangedChords = []

    if (typeof(song)==='string') {
        song = JSON.parse(song)
    }

    Object.keys(song).map((group)=>{

        song[group].chords.map((chord)=>{
            chord.time.map((step)=>{
                let chordObj = {
                    time: step.step,
                    name: chord.chord
                }
                chords.push(chordObj)
            })
        })
    })

    chords.sort((chordA, chordB)=>{
        return chordA.time - chordB.time
    })

    let lastChord = chords[0]

    chords.map((chord,index)=>{

        if (chord.name !== lastChord.name) {
            let chordObj = {
                name : lastChord.name,
                from : parseFloat( (index!==0)?lastChord.time:0 ),
                to   : chord.time-0.1
            }
            rangedChords.push(chordObj)
            lastChord = chord
        }

    })

    return rangedChords
}

export const identifyChord = (time, rangedChords) => {

    for (let chord of rangedChords) {
        if ((chord.from <= time) && ( chord.to >= time )) {
            return chord
            break
        }
    }
    return {from:0,to:0,name:''} // default
}