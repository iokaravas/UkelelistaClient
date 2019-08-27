import React from 'react'

const Item = (props)=> {
    return (
            <div className="card">
                <img className="card-img-top" src="{props.thumbnail}" alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p>Τόνος Video: <strong>Base</strong></p>
                    <a href="/{props.name}"  className="btn btn-outline-secondary btn-squared">Παίξε το...</a>
                </div>
            </div>
    )
}

export default Item