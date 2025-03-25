import axios from "axios";

const BASE_URL = "http://localhost:8081/user/wishlist";

const getHeaders = (token) => ({
    headers: { Authorization: `Bearer ${token}` },
});

export const createUnlistWishlist = async (token, data) => {
    console.log("Token used in createUnlistWishlist:", token);
    return await axios.post(`${BASE_URL}/create-unlist`, data, getHeaders(token));
};

export const getWishlistHistory = async (token) => {
    console.log("Token used in getWishlistHistory:", token);
    return await axios.get(`${BASE_URL}/history`, getHeaders(token));
};


