import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand whiteColour">Your Workouts</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-link whiteColour" aria-current="page" >Home</Link>
                            {/* <Link to="/" className="nav-link whiteColour">Features</Link> */}
                            {/* <Link to="/" className="nav-link whiteColour">Pricing</Link> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar