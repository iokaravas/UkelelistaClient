const initialState = {
    songs: [],
    song: {},
    isLoadingSongs: true,
    isLoadingSong: true
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SONGS_SUCCESS':
            return {
                ...state,
                songs: action.songs
            }
        case 'IS_LOADING_SONGS':
            return {
                ...state,
                isLoadingSongs: action.isLoadingSongs
            }
        case 'IS_LOADING_SONG':
            return {
                ...state,
                isLoadingSong: action.isLoadingSong
            }
        case 'GET_SONG_SUCCESS':
            return {
                ...state,
                song: action.song
            }
        default:
            return state
    }
}

export default appReducer