import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHostData } from "../../components/HostContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default  function Dashboard() {
    const {income: hostIncome, reviews: hostReviewsData, loading, error, fetchVans} = useHostData()
    const lastMonthIncome = hostIncome?.incomes[hostIncome.incomes.length-1]
    const [hostVans, setHostVans] = useState([])
     
    useEffect(() => {
        async function loadVans() {
            const data = await fetchVans()
            setHostVans(data)
        }
        loadVans()
    }, [])
    
    let USDollar = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0 
    })

    function reviewSumm() {
        let reviewsSummaryArr = [0,0,0,0,0]
        hostReviewsData?.reviews?.forEach(review => {
            return reviewsSummaryArr[review.rating-1]++
        })
        return reviewsSummaryArr
    }

    function hostAverageRating() {
        const reviewsSummaryArr = reviewSumm()
        const totalReviews = hostReviewsData?.reviews?.length || 1 
        let weightedSum = 0

        for (let i = 0; i < reviewsSummaryArr.length; i++) {
            weightedSum += reviewsSummaryArr[i] * (i + 1) 
        }
        return (weightedSum / totalReviews).toFixed(1)
    }

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
        <div className="dashboard-container">
            <div className="dashboard-income-container">
                <div className="dashboard-income-text">
                    <h1>Welcome!</h1>
                    <p>Income last <span className='underline-bold'>30 days</span></p>
                    <h2 className='last-month-income'>{lastMonthIncome ? USDollar.format(lastMonthIncome.amount) : "No income data"}</h2>
                </div>
                <Link to="income">Details</Link>
            </div>
            <div className="dashboard-reviews-container">
                <div className="dashboard-reviews-container-text">
                    <h2>Review score</h2>
                    <h3>{hostAverageRating()}</h3>
                    <p><span className="star"><FontAwesomeIcon icon={faStar}/></span></p>
                </div>
                <Link to="reviews">Details</Link>
            </div>
            <div className="dashboard-host-van-container">
                <div className="dashboard-host-van-text">
                    <h3>Your listed vans</h3>
                    <Link to="vans">View all</Link>
                </div>
                {hostVansList}
            </div>

        </div>
    )
}