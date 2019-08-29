export const parseJSONChords = (song) => {
    let chords = []

    if (typeof(song)==='string') {
        song = JSON.parse(song)
    }

    Object.keys(song).map((group)=>{

        song[group].chords.map((chord)=>{
            chord.time.map((step)=>{
                let chordObj = {
                    time: step.step*1000,
                    chord: chord.chord
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