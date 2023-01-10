import React from 'react'
import { Link } from 'react-router-dom'
import './Works.css'

const Works = () => {
    return (
        <main id="works">
            <div className='container'>
                <Link to="/">
                    <img src="./assets/img/logo.svg" width={50} height={50}/>
                </Link>
                <h3>Trabajos</h3>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <button className="nav-link active">Active</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">Algo</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">Algo</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">Algo</button>
                    </li>
                </ul>
            </div>

        </main>
    )
}

export default Works