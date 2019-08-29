import React from 'react'
import {NavLink} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css'

const nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <img src="/img/icon.png" alt="Ukelelista" className="mr-2" height="30px"/>
            <a className="navbar-brand" href="http://www.ukulelista.gr">Ukulelista <small><strong>[ beta ]</strong>
            </small></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown-7" aria-controls="navbarNavDropdown-7" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown-7">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Αρχική</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/library">Βιβλιοθήκη</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/addnew">Προσθήκη video</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default nav