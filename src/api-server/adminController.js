import axios from "axios"


export const getDashboard = async (token) => {
    return await axios('http://localhost:8081/admin/dashboard',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}

export const getAllUsers = async (token) => {
    return await axios('http://localhost:8081/admin/all-users',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}

export const getAllHosts = async (token) => {
    return await axios('http://localhost:8081/admin/all-hosts',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}



export const getAllAccommodations = async () => {
    return await axios('http://localhost:8081/admin/all-accommodations')
}

export const getAllAccomCate = async (token) => {
    return await axios('http://localhost:8081/admin/accomcate/get-all',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}


export const getAllAmenities = async (token) => {
    return await axios('http://localhost:8081/admin/amenity/get-all',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}


export const getAllBookings = async (token) => {
    return await axios('http://localhost:8081/admin/all-bookings',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}