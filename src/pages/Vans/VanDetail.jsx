import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { getVans } from "../../api";

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()

    const [vanData, setVanData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(params.id)
                setVanData(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [params.id])

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-data-container">
            <Link 
                to={`..${location.state ?  location.state.search : ""}`}
                relative="path">  
                    <FontAwesomeIcon icon={faArrowLeft}/> {`Back to ${(location.state && location.state.type) ? location.state.type : "all"} vans`}
            </Link>   
            {vanData ? (
                <div className="van-data">
                    <img src={vanData.imageUrl} alt="" />
                    <h4 className={`van-card-type van-card-type-${vanData.type}-selected`}>{vanData.type? vanData.type.charAt(0).toUpperCase() + vanData.type.slice(1) : "Unkown"}</h4>
                    <h2>{vanData.name}</h2>
                    <h3>${vanData.price}/day</h3>
                    <p>{vanData.description}</p>
                    <button>Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}