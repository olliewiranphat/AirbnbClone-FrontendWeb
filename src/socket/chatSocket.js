import { io } from "socket.io-client";

// เชื่อมกับ Backend (PORT ต้องตรงกับ server.js)
const socket = io("http://localhost:8081", {
    transports: ["websocket"],
    autoConnect: false // เราจะ connect เองตอน joinChat
});

export default socket;
