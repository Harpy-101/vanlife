export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

export async function getHostIncome() {
    const res = await fetch("/api/host/income")
    // console.log("Raw response:", res)
    if (!res.ok) {
        throw {
            message: "Couldn't fetch host income",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    // console.log("Pased data:", data)
    return data
}

export async function getHostReviews() {
    const res = await fetch("/api/host/reviews")
    // console.log("Raw response:", res)
    if (!res.ok) {
        throw {
            message: "Couldn't fetch host reviews", 
            statusText: res.statusText, 
            status: res.status
        }
    }
    const data = await res.json()
    console.log("Parsed data:", data)
    return data
}