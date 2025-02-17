import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="nav-container">
            <Link to="/" id="vanlife-link">#VANLIFE</Link>
            <div className="links-container">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </div>
    )
}