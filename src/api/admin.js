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
export const getListAccomocate = async (token) => {
    console.log("Token used in getListAccomocate:", token);
    return await axios.get(`${BASE_URL}/accomcate/get-all`, getHeaders(token));
};

export const deletedAccomcate = async (token,categoryID) => {
    console.log("Deleted Accomcate:", token,categoryID);
    return await axios.delete(`${BASE_URL}/accomcate/delete/${categoryID}`, getHeaders(token));
};
export const updateAccomcate = async (token) => {
    console.log("Deleted Accomcate:", token);
    return await axios.get(`${BASE_URL}/accomcate/update-newname`, getHeaders(token));
};

export const createAccomcate = async (token, cateName) => {
    return await axios.post(`${BASE_URL}/accomcate/create`, { cateName }, getHeaders(token));
};