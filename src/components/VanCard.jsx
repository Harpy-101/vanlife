import React from "react";

export default function VanCard({imageUrl, name, type, price}) {
    return(
        <div className="van-card">
            <img src={imageUrl} alt="" />
            <div className="van-card-text">
                <h3>{name}</h3>
                <div className="van-card-price-container">
                    <h3>${price}</h3>
                    <p>/day</p>
                </div>
            </div>
            <h4 className={`van-card-type van-card-type-${type}-selected`}>{type? type.charAt(0).toUpperCase() + type.slice(1) : "Unkown"}</h4>
        </div>
    )
}