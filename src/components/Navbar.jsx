import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="nav-container">
            <Link to="/" id="vanlife-link">#VANLIFE</Link>
            <div className="links-container">
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? "active-link" : null}>
                        Host
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "active-link" : null}>
                        About
                </NavLink>
                <NavLink
                    to="/vans"
                    className={({isActive}) => isActive ? "active-link" : null}>
                        Vans
                </NavLink>
            </div>
        </div>
    )
}