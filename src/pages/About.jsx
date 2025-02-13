import React from "react";
import Navbar from "../Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-page-picture">
                <img src="src/assets/image54.png" alt="" />
            </div>
            <div className="about-page-content">
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                <div>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)
                    </p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="about-page-cta-container">
                    <h2>Your destination is waiting.</h2>
                    <h2>Your van is ready.</h2>
                    <button className="about-page-cta-btn">Explore our vans</button>
                </div>
            </div>
        </>
    )
}
