import { useOutletContext } from "react-router-dom"

export default function HostVansPhotos() {
    const van = useOutletContext()
    
    return (
        <img src={van.imageUrl} alt="" />
    )
}