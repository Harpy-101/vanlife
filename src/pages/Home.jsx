import React from "react"
import Navbar from "../Navbar"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="hero">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className="search-van-btn">Find your van</button>
            </div>
        </>
    )
}