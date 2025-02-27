import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()

    const [vanData, setVanData] = useState(null)
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanData(data.vans))
    }, [params.id])

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