import axios from "axios";

export const setupRolehost= async (token,role) => {
    const res = await axios.patch(`http://localhost:8081/user/my-account/create-update`,{role},{
        headers:{
            Authorization: `Bearer ${token}`
        }}
    );
    return res.data;
};