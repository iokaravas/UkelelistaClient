import React, { useEffect } from 'react';
import ChordButton from '../../components/play/chordbutton'
import {fetchSongIfNeeded} from '../../actions'
import {useSelector, useDispatch} from 'react-redux'
import {parseJSONChords} from '../../utils/index.js'

export const Play = (props) => {
    const songName = props.match.params.songName
    const song = useSelector(state => state.song)
    const isLoading = useSelector(state => state.isLoadingSong)
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(fetchSongIfNeeded(songName))
    },[])

    if (isLoading) {
        return <div> Loading... </div>
    }

    const chordsTimeline = parseJSONChords(song.chords)

    return (
        <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto text-center">
            <h3>Play song {songName}</h3>

            <div className="row">
                {/*<ChordButton {...song}/>*/}

            </div>
        </div>

    )
}

export default Play