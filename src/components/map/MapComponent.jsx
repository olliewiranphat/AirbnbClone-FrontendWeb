import React, { useState, useCallback, useMemo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
    lat: 13.7563, // Bangkok
    lng: 100.5018,
};

const containerStyle = {
    width: "550px",
    height: "600px",
    borderRadius: "15px"
}

const MapComponent = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: 13.7563, lng: 100.5018 });


    // ✅ ใช้ useCallback ป้องกันฟังก์ชันถูกสร้างใหม่ทุกครั้ง
    const handleMapClick = useCallback((event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };
        setSelectedLocation(newLocation);
        setMapCenter(newLocation); // ✅ อัปเดตตำแหน่งของแผนที่
    }, []);

    console.log("selectedLocation:", selectedLocation);

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter} // ✅ ใช้ center ที่เปลี่ยนแปลงได้
                zoom={12}
                onClick={handleMapClick}
            >
                {/* ✅ แสดง Marker ที่ตำแหน่งที่ถูกเลือก */}
                {!selectedLocation && <Marker position={center} />}
                {selectedLocation && <Marker position={selectedLocation} />}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;

