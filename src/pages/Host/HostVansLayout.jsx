import { NavLink } from "react-router-dom";

export default function HostVansLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <div className="host-vans-layout-container">
            <NavLink
                to="."
                end
                style={({isActive}) => isActive ? activeStyle : null}>
                    Details
            </NavLink>
            <NavLink
                to="pricing"
                end
                style={({isActive}) => isActive ? activeStyle : null}>
                    Pricing
            </NavLink>
            <NavLink
                to="photos"
                end
                style={({isActive}) => isActive ? activeStyle : null}>
                    Photos
            </NavLink>
        </div>
    )
}