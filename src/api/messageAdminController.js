import axios from "axios";

// const BASE_URL = "http://localhost:8081/user/messages";

// // สร้างฟังก์ชันช่วยสำหรับการกำหนด headers
// const getHeaders = (token) => ({
//     headers: { Authorization: `Bearer ${token}` },
// });


export const chatWithAdmin = async (token) => {
    return await axios.get(`http://localhost:8081/user/messages/conversation/with-admin`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};