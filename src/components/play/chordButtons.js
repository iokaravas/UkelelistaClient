import React from 'react'
import {useSelector} from "react-redux";

const ChordButtons = ()=> {
    const chords = useSelector(state => state.playerReducer.chords)

    return (
        <div className="row scrolling-wrapper-flexbox">
            {chords.map((chord)=>{
                return <div className="btn btn-squared chord col-12 col-sm-4 col-md-4 col-lg-3 btn-dark">{chord.name}</div>
            })}
        </div>
    )
}

export default ChordButtons