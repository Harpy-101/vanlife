import { useEffect, useState } from "react"
import { getHostReviews } from "../../api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function Reviews() {
    const [hostReviewsData, setHostReviewsData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function fetchHostReviews() {
            setLoading(true)
            try {
                const data = await getHostReviews()
                setHostReviewsData(data || null)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchHostReviews()
    }, [])

    function formatDate(dateString) {
        const date = new Date(dateString)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear().toString().slice(-2)

        return `${day}/${month}/${year}`
    }
    
    function reviewSumm() {
        let reviewsSummaryArr = [0,0,0,0,0]
        hostReviewsData.reviews?.forEach(review => {
            return reviewsSummaryArr[review.rating-1]++
        })
        return reviewsSummaryArr
    }

    function renderReviewsSummChart() {
        const reviewsArr = reviewSumm()
        const totalReviews = hostReviewsData.reviews?.length || 1 
        return reviewsArr.map((count, index) => {
            const percentage = (count / totalReviews) * 100
            return (
                <div className="review-bar" key={index}>
                    <div className="review-row">
                        <p>{index+1}&nbsp;stars</p>
                        <div className="progress-bar">
                            <div style={{
                                width: `${percentage}%`,
                                background: "#FF8C38",
                                height: 10
                            }} />
                        </div>
                        <p>{percentage}%</p>
                    </div>
                </div>
            )
            }).reverse()

    }

    function hostAverageRating() {
        const reviewsSummaryArr = reviewSumm()
        const totalReviews = hostReviewsData.reviews?.length || 1 
        let weightedSum = 0

        for (let i = 0; i < reviewsSummaryArr.length; i++) {
            weightedSum += reviewsSummaryArr[i] * (i + 1) 
        }
        return (weightedSum / totalReviews).toFixed(1)
    }

    function renderStars(amount) {
        let arr = []
        for (let i = 0; i < amount; i++) {
            arr.push( <span className="star"><FontAwesomeIcon icon={faStar}/></span>)
        }
        return arr
    }

    function renderReviewsArr() {
        return hostReviewsData.reviews?.map(review => {
            return (
                <div className="review-container" key={review.id}>
                    {renderStars(review.rating)}
                    <p><span className="reviewer-name">{review.reviewer}</span> <span className="greyed-out-text review-date">{formatDate(review.date)}</span></p>
                    <p>{review.comment}</p>
                    <hr />
                </div>
            )
        })
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="reviews-container">
            <div className="host-income-text">
                <h1>Your reviews</h1>
                <p className="greyed-out-text">last <span className="underline-bold">30 days</span></p>
            </div>
            <div className="host-average-rating">
                <h2>{hostAverageRating()}</h2>
                <p><span className="star"><FontAwesomeIcon icon={faStar}/></span></p>
                <p>overall rating</p>
            </div>
            {hostReviewsData ? renderReviewsSummChart(): <h1>No data</h1>}
            <div className="costumer-reviews-container">
                <h3>Reviews ({hostReviewsData.reviews?.length})</h3>
                {hostReviewsData ? renderReviewsArr() : <h1>No data</h1>}
            </div>
        </div>
    )
}