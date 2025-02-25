import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
    const params = useParams()
    console.log(params)

    const [vanData, setVanData] = useState(null)
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVanData(data.vans)
            })
    }, [params.id])

    return (
        <div className="van-data-container">
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