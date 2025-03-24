import axios from "axios";

export const updateToHOST = async (token, host) => {
    console.log("host", host);
    return await axios.patch("http://localhost:8081/user/my-account/create-update",
        { role: host },
        {
            headers: { Authorization: `Bearer ${token}` } 
        }
    );
}

// export