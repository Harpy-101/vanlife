import { useOutletContext } from "react-router-dom"

export default function HostVansInfo() {
    const van = useOutletContext()

    return (
        <>
            <p><span>Name: </span>{van.name}</p>                        
            <p><span>Category: </span>{van.type}</p>
            <p><span>Description: </span>{van.description}</p>
            <p><span>Visability: </span>add to the API</p> 
        </>
    )
}