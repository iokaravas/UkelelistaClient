const initialState = {
    songs: [],
    song: {},
    isLoadingSongs: true
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SONGS_SUCCESS':
            return {
                ...state,
                songs: action.songs
            }
            break
        case 'IS_LOADING_SONGS':
            return {
                ...state,
                isLoadingSongs: action.isLoadingSongs
            }
            break
        case 'GET_SONG_SUCCESS':
            return {
                ...state,
                song: action.song
            }
            break
        default:
            return state
    }
}

export default rootReducer