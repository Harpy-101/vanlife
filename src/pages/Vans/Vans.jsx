import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import VanCard from "../../components/VanCard"
import { getVans } from "../../api"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams([])
    const typeFilter = searchParams.get("type")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [allVans, setAllVnans] = useState([])
    useEffect(() => {
            async function loadVans() {
                setLoading(true)
                try {
                    const data = await getVans()
                    setAllVnans(data)
                } catch(err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
            loadVans()
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

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
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