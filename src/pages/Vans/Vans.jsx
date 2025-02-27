import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import VanCard from "../../components/VanCard"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams([])
    const typeFilter = searchParams.get("type")

    const [allVans, setAllVnans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then(data => setAllVnans(data.vans))    
    }, [])

    function renderCards() {
        const arr = (typeFilter ? allVans.filter(van => van.type === typeFilter) : allVans).map((van, index) => {
            return (
            <Link to={`${van.id}`} state={{search: `?${searchParams.toString()}`, type: typeFilter}} key={index}>
                <VanCard 
                    key={van.id || index}
                    imageUrl={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    type={van.type}    
                />
            </Link>
        )
        })
        return arr
    }

    return(
        <>
            <h1>Explore our van options</h1>
            <div className="van-list-filter-btn-container">
                <Link className={`van-type-link simple ${typeFilter === "simple" ? "selected" : ""}`} to="?type=simple">Simple</Link>
                <Link className={`van-type-link rugged ${typeFilter === "rugged" ? "selected" : ""}`} to="?type=rugged">Rugged</Link>
                <Link className={`van-type-link luxury ${typeFilter === "luxury" ? "selected" : ""}`}to="?type=luxury">Luxury</Link>
                {typeFilter && <Link className="van-type-clear-filter" to=".">Clear filter</Link>}
            </div>
            <div className="vans-grid">
                {renderCards()}
            </div>
        </>
    )
}