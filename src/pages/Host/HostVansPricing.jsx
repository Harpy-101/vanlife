import { useOutletContext } from "react-router-dom"

export default function HostVansPricing() {
    const van = useOutletContext()
    
    return (
        <h2>${van.price}<span>/day</span></h2>
    )
}