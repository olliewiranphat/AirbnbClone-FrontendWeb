import axios from "axios";

const BASE_URL = "http://localhost:8081/admin";

// สร้างฟังก์ชันช่วยสำหรับการกำหนด headers
const getHeaders = (token) => ({
    headers: { Authorization: `Bearer ${token}` },
});

export const getAllUser = async (token) => {
    console.log("Token used in getAllUser:", token);
    return await axios.get(`${BASE_URL}/all-users`, getHeaders(token));
};
export const getAllAccomodation = async (token) => {
    console.log("Token used in getAllAccomodation:", token);
    return await axios.get(`${BASE_URL}/all-accommodations`, getHeaders(token));
};