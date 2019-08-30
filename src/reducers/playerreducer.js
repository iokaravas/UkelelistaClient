const initialState = {
    currentChord: '',
    chordsTimeouts: [],
    chords: []
}

const playerReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_CURRENT_CHORD':
            return {
                ...state,
                currentChord: action.currentChord
            }
        case 'SET_CHORDS_TIMEOUTS':
            return {
                ...state,
                chordsTimeouts: action.chordsTimeouts
            }
        case 'SET_CHORDS':
            return {
                ...state,
                chords: action.chords
            }
        case 'CLEAR_CHORDS_TIMEOUTS':
            for (let timeout of state.chordsTimeouts) {
                clearTimeout(timeout)
            }
            return {
                ...state,
                chordsTimeouts: []
            }
        default:
            return state
    }

}

export default playerReducer