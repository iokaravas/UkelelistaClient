export const parseJSONChords = (song) => {
    let chords = []

    Object.keys(song).map((group)=>{

        console.log(group)

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