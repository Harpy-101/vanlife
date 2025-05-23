import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="not-found-info-container">
           <h1>Sorry, the page you were looking for was not found.</h1> 
            <Link to="/" className="return-to-home-link">Return to home</Link>
        </div>
    )
}