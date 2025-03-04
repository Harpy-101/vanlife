import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || "/host"

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData) 
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                window.dispatchEvent(new Event("storage"))
                navigate(from, {replace: true})
            })
            .catch (err => {
                setError(err)
            }) 
            .finally(() => {
                setStatus("idle")
            })
        setStatus("idle")
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <div className="login-container-text">
                {location.state?.message && <h2 className="login-first">{location.state.message}</h2>}
                <h1>Sign in to your account</h1>
                {
                error?.message &&
                    <h3 className="login-first">{error.message}</h3>}
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting" ? true : false}>{status === "submitting" ? "Logging in..." : "Log in"}</button>
            </form>
        </div>
    )
}