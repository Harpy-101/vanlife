import { useParams, Link, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import HostVansLayout from "./HostVansLayout"
import { useHostData } from "../../components/HostContext"

export default function HostVansDetalis() {
    const params = useParams()
    const [vanData, setVanData] = useState([])
    const [loading, setLoading] = useState(true)
    const { fetchVans } = useHostData()

    useEffect(() => {
        async function getVans() {
            setLoading(true)
            const data = await fetchVans(params.id)
            setVanData(data)
            setLoading(false)
        }        
        getVans()
    }, [params.id])

    if (loading) return <p>Loading...</p>

    return (
        <div className="host-van-details-container">
            <Link 
                to=".."
                relative="path">  
                    <FontAwesomeIcon icon={faArrowLeft}/> Back to all vans
            </Link>   
            {vanData ? (
                <div className="host-van-details-tile-container">
                    <div className="host-van-tile-info-flex-container">
                        <img src={vanData.imageUrl} />
                        <div className="host-van-info-box">
                            <h4 className={`van-card-type van-card-type-${vanData.type}-selected`}>{vanData.type? vanData.type.charAt(0).toUpperCase() + vanData.type.slice(1) : "Unkown"}</h4>
                            <h1>{vanData.name}</h1>
                            <h2>${vanData.price}<span>/day</span></h2>
                        </div>
                    </div>
                    <HostVansLayout />
                    <Outlet context={vanData}/>
                </div>
            ) : <h1>Loading...</h1>}
        </div>
    )
}