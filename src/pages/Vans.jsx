import React, { useEffect, useState } from "react"
import Navbar from "../Navbar"
import VanCard from "../VanCard"

export default function Vans() {
    const [allVans, setAllVnans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then(data => {
                setAllVnans(data.vans)
                console.log(data.vans)
            })    
    }, [])

    function renderCards() {
        const arr = allVans.map((van, index) => {
            return <VanCard 
                key={van.id || index}
                imageUrl={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}    
            />
        })
        return arr
    }

    return(
        <>
            <Navbar />
            <h1>Explore our van options</h1>
            <h2>[Add the filter section]</h2>
            <div className="vans-grid">
                {renderCards()}
            </div>
        </>
    )
}