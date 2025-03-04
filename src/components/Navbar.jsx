import {useState, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    // const isLoggedIn = localStorage.getItem("loggedin")

    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("loggedin"));

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(!!localStorage.getItem("loggedin"));
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        setIsLoggedIn(false);
        window.dispatchEvent(new Event("storage"))
        window.location.reload()
    };
    
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
                {isLoggedIn && <button
                    className="logout-btn" 
                    onClick={handleLogout}>
                    X
                </button>}
            </div>
        </div>
    )
}