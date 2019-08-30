import axios from 'axios'

export const GET_SONGS = 'GET_SONGS'
export const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS'
export const GET_SONG_SUCCESS = 'GET_SONG_SUCCESS'
export const IS_LOADING_SONG = 'IS_LOADING_SONG'
export const IS_LOADING_SONGS = 'IS_LOADING_SONGS'
export const SET_CURRENT_CHORD = 'SET_CURRENT_CHORD'
export const SET_CHORDS = 'SET_CHORDS'
export const SET_CHORDS_TIMEOUTS = 'SET_CHORDS_TIMEOUTS'

export const getSongs = (songs) => {
    return {
        type: "GET_SONGS",
        songs
    }
}

export const getSongsSuccess = (songs) => {
    return {
        type: "GET_SONGS_SUCCESS",
        songs,
        receivedAt: Date.now()
    }
}

export const getSongSuccess = (song) => {
    return {
        type: "GET_SONG_SUCCESS",
        song,
        receivedAt: Date.now()
    }
}

export const isLoadingSongs = (bool) => {
    return {
        type: "IS_LOADING_SONGS",
        isLoadingSongs: bool
    }
}

export const isLoadingSong = (bool) => {
    return {
        type: "IS_LOADING_SONG",
        isLoadingSong: bool
    }
}

export const setCurrentChord = (chord) =>{
    return {
        type: "SET_CURRENT_CHORD",
        currentChord : chord
    }
}

export const setChords = (chords) => {
    return {
        type: "SET_CHORDS",
        chords : chords
    }
}

export const setChordsTimeouts = (timeouts) => {
    return {
        type: "SET_CHORDS_TIMEOUTS",
        chordsTimeouts : timeouts
    }
}

export const clearChordsTimeouts = (timeouts) => {
    return {
        type: "CLEAR_CHORDS_TIMEOUTS",
        chordsTimeouts : timeouts
    }
}

const fetchSongs = () => {
    return (dispatch) => {
        dispatch(isLoadingSongs(true))
        // Get songs
        return axios.get(`http://localhost:3001/songs/`)
            .then(response=>{
                dispatch(getSongsSuccess(response.data.songs))
                dispatch(isLoadingSongs(false))
            })
            .catch(error=>{
                dispatch(isLoadingSongs(false))
                throw(error)
            })
    }
}

const shouldFetchSongs = (state) => {
    const songs = state.songs

    if (!songs) {
        return true
    } else if (songs.length===0) {
        return true
    }

    if (state.isLoadingSongs) return false
}

export const fetchSongsIfNeeded = songs => (dispatch, getState) => {
    if (shouldFetchSongs(getState(), songs)) {
        return dispatch(fetchSongs(songs))
    }
}

const shouldFetchSong = (state) => {
    const song = state.song

    if (!song) {
        return true
    } else if (Object.keys(song).length===0) {
        return true
    }

    if (state.isLoadingSongs) return false
}

export const fetchSongIfNeeded = song => (dispatch, getState) => {
    if (shouldFetchSong(getState(), song)) {
        return dispatch(fetchSong(song))
    }
}

const fetchSong = (songName) => {
    return (dispatch) => {
        dispatch(isLoadingSong(true))
        // Get songs
        return axios.get(`http://localhost:3001/song/${songName}`)
            .then(response=>{
                dispatch(getSongSuccess(response.data.song))
                dispatch(isLoadingSong(false))
            })
            .catch(error=>{
                dispatch(isLoadingSong(false))
                throw(error)
            })
    }
}

