import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHostData } from "../../components/HostContext"

export default function HostVans() {
    const [hostVans, setHostVans] = useState([])
    const [loading, setLoading] = useState(true)
    const { fetchVans } = useHostData()
    
    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            const data = await fetchVans()
            setHostVans(data)
            setLoading(false)
        }
        loadVans()
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
    
    if (loading) return <p>Loading...</p>

    return (
        <div className="host-vans-cotainer">
            <h1>Your listed vans</h1>
            <div className="host-van-list">
                {hostVansList}
            </div>
        </div>
    )
}