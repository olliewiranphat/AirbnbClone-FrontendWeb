// import axios from "axios"

// export const getMyAccount = async (token) => {
//     return await axios.get("http://localhost:8081/user/my-account/get", {
//         headers: {
//             Authorization: `Bearer ${token}`, // ✅ ต้องมี Bearer
//         },
//     });
// };

import axios from "axios";

const BASE_URL = "http://localhost:8081/user/my-account";

// สร้างฟังก์ชันช่วยสำหรับการกำหนด headers
const getHeaders = (token) => ({
    headers: { Authorization: `Bearer ${token}` },
});

export const getMyAccount = async (token) => {
    // console.log("Token used in getMyAccount:", token);
    return await axios.get(`${BASE_URL}/get`, getHeaders(token));
};

export const updateImageUrl = async (token, data) => {
    // console.log("Token used in updateImageUrl:", token);
    return await axios.patch(`${BASE_URL}/update-imageurl`, data, getHeaders(token));
};

export const createUpdateAccount = async (token, updateData) => {
    // console.log("Token used in createUpdateAccount:", token);
    return await axios.patch(`${BASE_URL}/create-update`, updateData, getHeaders(token));
};

export const inactiveAccount = async (token) => {
    // console.log("Token used in inactiveAccount:", token);
    return await axios.patch(`${BASE_URL}/inactive`, null, getHeaders(token));
};