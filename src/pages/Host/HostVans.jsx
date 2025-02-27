import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [hostVans, setHostVans] = useState([])
    
    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => {
                setHostVans(data.vans)
                console.log(data.vans)
            })
    }, [])

    const hostVansList = hostVans.map(van => {
        return <div key={van.id} className="host-van-element">
            <Link to={`${van.id}`}>
                <img src={van.imageUrl} />
                <div className="host-van-info">
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>   
                </div>
            </Link>
        </div>
    })
    
    return (
        <div className="host-vans-cotainer">
            <h1>Your listed vans</h1>
            <div className="host-van-list">
                {hostVansList}
            </div>
        </div>
    )
}