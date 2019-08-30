import React, {useEffect, useState, Fragment} from 'react';
import ChordButtons from '../../components/play/chordButtons'
import YtPlayer from '../../components/play/ytplayer'
import {fetchSongIfNeeded} from '../../actions'
import {useSelector, useDispatch} from 'react-redux'
import {Helmet} from 'react-helmet'

export const Play = (props) => {
    const songName = props.match.params.songName
    const song = useSelector(state => state.appReducer.song)
    const isLoading = useSelector(state => state.appReducer.isLoadingSong)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSongIfNeeded(songName))
    }, [])

    if (isLoading) {
        return <div> Loading... </div>
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
                    <YtPlayer videoId={song.link} />
                    <ChordButtons />
                </div>
            </div>
        </Fragment>
    )
}

export default Play