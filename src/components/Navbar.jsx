import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
                <Link to="login" className="login-link">
                    <FontAwesomeIcon icon={faUser}/>
                </Link>
                <button
                    className="logout-btn" 
                    onClick={() => localStorage.removeItem("loggedin")}>
                    X
                </button>
            </div>
        </div>
    )
}