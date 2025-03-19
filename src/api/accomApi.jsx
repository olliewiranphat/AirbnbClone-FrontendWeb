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
        return response.data.secure_url; // คืน URL ของรูปภาพที่อัปโหลด
    } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Failed to upload image");
    }
   
};

export const addAccommodation = async (token,id) => {
    return await axios.post('http://localhost:8081/host/accommodation/add-new',{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}