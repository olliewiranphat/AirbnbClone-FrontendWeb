import axios from "axios"

export const createUpdateAccount = async (token, value) => {
    return await axios.put('http://localhost:8081/user/my-account/create-update',
        value,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}


export const getMyAccount = async (token) => {
    console.log('api',token)
    return await axios.get('http://localhost:8081/user/my-account/get',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}


export const inactiveAccount = async (token) => {
    return await axios.patch("http://localhost:8081/user/my-account/inactive",
        {}, // ✅ Body ต้องเป็น {} ไม่ใช่ headers
        {
            headers: { Authorization: `Bearer ${token}` } // ✅ Headers ต้องอยู่ตรงนี้
        }
    );
}


export const updateImageUrl = async (token, imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile); // ✅ ต้องตรงกับ Multer : `upload.single("file")`

    return await axios.patch("http://localhost:8081/user/my-account/update-imageurl",
        formData, // ✅ ส่ง FormData
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

//🔴 ทำไมต้องใช้ FormData ที่ Frontend?
// เพราะ ไฟล์อัปโหลด (imageFile) เป็น binary data ซึ่ง Axios หรือ Fetch API ไม่สามารถส่งเป็น JSON ได้โดยตรง
// 📌 ต้องใช้ FormData เพื่อแนบไฟล์ให้ถูกต้อง
// ถ้าไม้ใช้ FormDate, และใข้ imageFile โดยตรง
// imageFile เป็น File ไม่สามารถแปลงเป็น JSON ได้
// Backend (multer) จะไม่พบไฟล์ใน req.file
// Express.js จะอ่านเป็น undefined