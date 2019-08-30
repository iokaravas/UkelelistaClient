import React, {useEffect, useState, useReducer} from 'react';
import YouTube from 'react-youtube'
import {identifyChord, parseJSONChords} from "../../utils";
import {useDispatch, useSelector} from "react-redux";
import {setChords, setChordsTimeouts, setCurrentChord, clearChordsTimeouts} from '../../actions'
import ChordOverlay from "../../components/play/chordoverlay"


export const YtPlayer = (props) => {
    const song = useSelector(state => state.appReducer.song)
    const currentChord = useSelector(state => state.playerReducer.currentChord)
    const chords = useSelector(state => state.playerReducer.chords)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setChords(parseJSONChords(song.chords)))
    }, [])

    const opts = {
        playerVars: {
            autoplay: 1
        }
    }

    const handleYTState = (event) => {
        const currentTime = event.target.getCurrentTime()

        if (event.data === 1) { // Playing

            // Set current Chord
            dispatch(setCurrentChord(identifyChord(currentTime, chords).name))

            // Clear previous timeouts
            dispatch(clearChordsTimeouts())

            // Set future timeouts for upcoming chords
            let timeouts = []
            for (let chord of chords) {
                let waitTime = parseFloat(chord.time) - currentTime
                if (waitTime < 0) continue

                let timeOut = setTimeout(() => {
                    dispatch(setCurrentChord(chord.name))
                }, waitTime * 1000)

                timeouts.push(timeOut)
            }

            // Keep timeouts
            dispatch(setChordsTimeouts(timeouts))

        } else { // Paused - stopped whatever - change later.
            // Clear previous timeouts
            dispatch(clearChordsTimeouts())
        }
    }

    return (<div>
        <YouTube
            videoId={props.videoId}
            opts={opts}
            onStateChange={handleYTState}
        />

        <h3> {currentChord} </h3>

        <ChordOverlay chord={currentChord}/>
    </div>)
}

export default YtPlayer