import React from "react";
import { Link } from "react-router";

export default function Navbar() {
    return(
        <div className="nav-container">
            <Link to="/" id="vanlife-link">#VANLIFE</Link>
            <div className="links-container">
                <Link to="/about">About</Link>
                <p>Vans</p>
            </div>
        </div>
    )
}