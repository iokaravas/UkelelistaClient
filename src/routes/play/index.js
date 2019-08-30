import React, {useEffect, useState, Fragment} from 'react';
import ChordButton from '../../components/play/chordbutton'
import ChordOverlay from "../../components/play/chordoverlay"
import {fetchSongIfNeeded} from '../../actions'
import {useSelector, useDispatch} from 'react-redux'
import {parseJSONChords, identifyChord} from '../../utils/index.js'
import YouTube from 'react-youtube'
import {Helmet} from 'react-helmet'

export const Play = (props) => {
    const songName = props.match.params.songName
    const song = useSelector(state => state.song)
    const isLoading = useSelector(state => state.isLoadingSong)
    const dispatch = useDispatch()

    const [currentChord, setChord] = useState('')
    const [chordTimeouts, setTimeouts] = useState([])


    useEffect(() => {
        dispatch(fetchSongIfNeeded(songName))
    }, [])

    if (isLoading) {
        return <div> Loading... </div>
    }

    const chordsTimeline = parseJSONChords(song.chords)

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    }

    const handleYTState = (event) => {
        const currentTime = event.target.getCurrentTime()

        if (event.data === 1) {
            console.log('started playing')

            // Set current Chord
            setChord(identifyChord(currentTime, chordsTimeline).name)

            // Clear previous timeouts
            for (let timeout of chordTimeouts) {
                clearTimeout(timeout)
            }

            setTimeouts([])

            // Set future Chords
            let timeouts = []
            for (let chord of chordsTimeline) {
                let duration = parseFloat(chord.time) - currentTime
                if (duration < 0) continue

                let timeOut = setTimeout(() => {
                    setChord(chord.name)
                }, duration * 1000)
                timeouts.push(timeOut)
            }

            setTimeouts(timeouts)


        } else { // Paused - stopped whatever - change later.
            // Clear previous timeouts
            if (chordTimeouts.length !== 0) {
                console.log('cleared timeouts')
                for (let timeout of chordTimeouts) {
                    clearTimeout(timeout)
                }
            }
            setTimeouts([])
        }
    }

    return (
        <Fragment>

            <Helmet>
                <meta charSet="utf-8"/>
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example"/>
            </Helmet>

            <div className="section-title col-lg-8 col-md-10 ml-auto mr-auto text-center">
                <h3>Play song {songName}</h3>

                <div className="row">

                    <YouTube
                        videoId={song.link}
                        opts={opts}
                        onStateChange={handleYTState}
                    />

                    <h3> {currentChord} </h3>

                    <ChordOverlay chord={currentChord}/>

                    {/*<ChordButton {...song}/>*/}

                </div>
            </div>
        </Fragment>
    )
}

export default Play