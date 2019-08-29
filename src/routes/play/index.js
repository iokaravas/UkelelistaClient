import React, { useEffect, useState } from 'react';
import ChordButton from '../../components/play/chordbutton'
import {fetchSongIfNeeded} from '../../actions'
import {useSelector, useDispatch} from 'react-redux'
import {parseJSONChords, identifyChord} from '../../utils/index.js'
import YouTube from 'react-youtube'


export const Play = (props) => {
    const songName = props.match.params.songName
    const song = useSelector(state => state.song)
    const isLoading = useSelector(state => state.isLoadingSong)
    const dispatch = useDispatch()

    const [currentChord, setChord] = useState('')


    useEffect(()=>{
            dispatch(fetchSongIfNeeded(songName))
    },[])

    if (isLoading) {
        return <div> Loading... </div>
    }

    const chordsTimeline = parseJSONChords(song.chords)

    console.log(chordsTimeline)

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    }

    const handleYTState = (event)=>{
        const currentTime = event.target.getCurrentTime()

        if (event.data == 1) {
            console.log('started playing')

            setChord(identifyChord(currentTime, chordsTimeline).name)
            // setChord(event.target.getCurrentTime())
        }
    }

    return (
        <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto text-center">
            <h3>Play song {songName}</h3>

            <div className="row">

                <YouTube
                    videoId={song.link}
                    opts={opts}
                    onStateChange={handleYTState}
                />

                <h3> {currentChord} </h3>

                {/*<ChordButton {...song}/>*/}

            </div>
        </div>

    )
}

export default Play