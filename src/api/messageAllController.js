import axios from "axios";

export const getAllChatRooms = async (token) => {
    return await axios.get(`http://localhost:8081/user/messages/get-all/conversations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};