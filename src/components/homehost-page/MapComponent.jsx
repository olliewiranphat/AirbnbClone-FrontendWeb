import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = { width: "100%", height: "700px" };
const center = { lat: 13.736717, lng: 100.523186 }; // พิกัดกรุงเทพฯ

const MapComponent = () => {
  const [markers, setMarkers] = useState([center]);
  console.log(markers);
  const onMapClick = (e) => setMarkers([...markers, { lat: e.latLng.lat(), lng: e.latLng.lng() }]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap onClick={onMapClick} mapContainerStyle={containerStyle} center={center} zoom={13}>
        {markers.map((pos, i) => <Marker key={i} position={pos} />)}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
