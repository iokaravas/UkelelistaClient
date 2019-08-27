import React from 'react'

const Item = ({thumbnail, title, name, base})=> {
    return (
            <div className="card">
                <img className="card-img-top" src="{thumbnail}" alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p>Τόνος Video: <strong>{base}</strong></p>
                    <a href="/play/{name}"  className="btn btn-outline-secondary btn-squared">Παίξε το...</a>
                </div>
            </div>
    )
}

export default Item