import React, { useEffect } from 'react';
import Item from '../../components/library/item'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSongsIfNeeded} from '../../actions'

export const emptyLib = () => {
    return (<div className="text-center"> Δεν υπάρχουν τραγούδια στη βιβλιοθήκη. </div>)
}

export const loadingLib = () => {
    return (<div className="text-center"> ... </div>)
}

export const Library = () => {

    const dispatch = useDispatch()
    const songs = useSelector(state => state.songs)
    const isLoading = useSelector(state => state.isLoadingSongs)

    useEffect(()=>{dispatch(fetchSongsIfNeeded(songs))},[])

    if (isLoading) return loadingLib()

    if (songs.length===0) return emptyLib()

    return (<div className="container col-mb-4">
        <div className="row songs_row">

            {songs.map((song,index)=> {
                return (<div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <Item {...song} />
                </div>)
            })}

        </div>
    </div>)
}

export default Library