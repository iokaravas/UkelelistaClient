import React, { useEffect } from 'react';
import ChordButton from '../../components/play/chordbutton'
import {fetchSong} from '../../actions'
import {useSelector, useDispatch} from 'react-redux'

export const Play = (props) => {
    const songName = props.match.params.songName
    const song = useSelector(state => state.song)
    const dispatch = useDispatch()

    useEffect(()=>{

        if ((!song) || (song.name !== songName)){
            dispatch(fetchSong(songName))
        }

    },[])

    return (
        <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto text-center">
            <h3>Play song {songName}</h3>

            <div className="row">
                <ChordButton {...song}/>
            </div>
        </div>

    )
}

export default Play