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
export const updateAccomcate = async (token,categoryID,cateName) => {
    console.log("UpdatedAccomcate:", token,categoryID,cateName);
    // ส่ง req.params ส่ง body
    return await axios.patch(`${BASE_URL}/accomcate/update-newname/${categoryID}`,{cateName}, getHeaders(token));
};

export const createAccomcate = async (token, cateName) => {
    return await axios.post(`${BASE_URL}/accomcate/create`, { cateName }, getHeaders(token));
};

/* booking */
export const getBooking = async (token) => {
    console.log("Token used in Booking:", token);
    return await axios.get(`${BASE_URL}/all-bookings`, getHeaders(token));
  };

  /* Amenity */
  export const createAmenity = async (token, name) => {
    console.log("Token used in getListAccomocate:", token , name);
    return await axios.post(`${BASE_URL}/amenity/create`,{name}, getHeaders(token));
  
  };

  export const getAmenity = async (token) => {
    console.log("Token used in getListAccomocate:", token);
    return await axios.get(`${BASE_URL}/amenity/get-all`, getHeaders(token));
  
  };
  export const deletedAmenity = async (token,amenityID) => {
    console.log("Token used in getListAccomocate:", token);
    return await axios.delete(`${BASE_URL}/amenity/delete/${amenityID}`, getHeaders(token));
  
  };
  export const updatedAmenity = async (token,amenityID,name) => {
    console.log("Token used in getListAccomocate:", token,amenityID,name);
    return await axios.patch(`${BASE_URL}/amenity/update-newname/${amenityID}`,{name}, getHeaders(token));
  
  };