import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({title, name, base, link})=> {

    return (
            <div className="card">
                <img className="card-img-top" src={`https://img.youtube.com/vi/${link}/0.jpg`} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p>Τόνος Video: <strong>{base}</strong></p>
                    <Link to={`/play/${name}`} className="btn btn-outline-secondary btn-squared">Παίξε το...</Link>
                </div>
            </div>
    )
}

export default Item