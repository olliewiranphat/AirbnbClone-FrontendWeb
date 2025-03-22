import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import useAccomStore from "../../../accomStore/addaccomStore";

const containerStyle = { width: "100%", height: "400px" };
const defaultCenter = { lat: 13.736717, lng: 100.523186 }; // พิกัดกรุงเทพฯ

const MapComponent = () => {
  const { formData, setFormData } = useAccomStore();
  // ใช้ค่าพิกัดจาก Zustand ถ้าไม่มีจะใช้ defaultCenter
  const center = formData.latitude && formData.longitude 
    ? { lat: parseFloat(formData.latitude), lng: parseFloat(formData.longitude) } 
    : defaultCenter;
   
    const onMapClick = (e) => {
      const newLat = e.latLng.lat();
      const newLng = e.latLng.lng();
      
      // อัปเดตพิกัดลง Zustand
      setFormData({ latitude: newLat, longitude: newLng });
    };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap onClick={onMapClick} mapContainerStyle={containerStyle} center={center} zoom={13}>
      {/* แสดง Marker ตามพิกัดใน Zustand */}
      {formData.latitude && formData.longitude && (
          <Marker position={{ lat: parseFloat(formData.latitude), lng: parseFloat(formData.longitude) }} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
