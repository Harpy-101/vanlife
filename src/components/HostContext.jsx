import { useState, useEffect, useContext, createContext, Children } from "react";
import { getHostIncome, getHostReviews, getHostVans } from "../api";

const HostContext = createContext()

export function HostProvider({ children }) {
    const [data, setData] = useState({
        income: null, 
        reviews: null, 
        loading: true,
        error: null
    })

    useEffect(() => {
        async function fetchHostData() {
            try {
                const [income, reviews] = await Promise.all([
                    getHostIncome(),
                    getHostReviews(),
                ])
                setData({income, reviews, loading: false, error: null})
            } catch (error) {
                setData(prev => ({...prev, loading: false, error}))
            }
        }
        fetchHostData()
    } , [])

    async function fetchVans(id) {
        try {
            return await getHostVans(id);
        } catch (error) {
            console.error("Failed to fetch vans:", error);
            return null;
        }
    }

    return (
        <HostContext.Provider value={{...data, fetchVans}}>
            {children}
        </HostContext.Provider>
    )
}


export function useHostData() {
    return useContext(HostContext)
}