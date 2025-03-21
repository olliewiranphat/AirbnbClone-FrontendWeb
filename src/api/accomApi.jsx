import axios from "axios";

export const uploadImage = async (token,file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Stayzy"); // ต้องสร้าง upload preset บน Cloudinary
    formData.append("cloud_name", "Stayzy"); // ชื่อ Cloudinary ของคุณ
    
    try {
        const response = await axios.post("http://localhost:8081/host/accommodation/add-image-cloud", formData, {
            headers: { 
                Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
        console.log(response.data);
        return{secure_url: response.data.secure_url, public_id: response.data.public_id}; // คืน URL ของรูปภาพที่อัปโหลด
    } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Failed to upload image");
    }
   
};

export const deleteImage = async (token,file) => {
    console.log(file);
    return await axios.post('http://localhost:8081/host/accommodation/delete-image-cloud',file,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

//Add
export const addAccommodation = async (token,id) => {
    return await axios.post('http://localhost:8081/host/accommodation/add-new',{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}
//delete
export const deleteAccommodation = async (token,id) => {
    return await axios.delete('http://localhost:8081/host/accommodation/delete/:accommodationID',{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

// update
export const updateRoom = async (token,id) => {
    return await axios.put('http://localhost:8081/host/accommodation/room/update/:roomID',{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateAmen = async (token,id) => {
    return await axios.put('http://localhost:8081/host/accommodation/amenity/update/:accommodationID',{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}
export const updateAccom = async (token,id) => {
    return await axios.put('http://localhost:8081/host/accommodation/amenity/update/:accommodationID',{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

//get all
export const getAccom = async (token,id) => {
    return await axios.put('http://localhost:8081/host/accommodation/get-all',{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

//get dashboard
export const getDashboard = async (token,id) => {
    return await axios.put('http://localhost:8081/host/dashboard',{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}




