import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    // const [markers, setMarkers] = useState([]);
    // const MapClickHandler = () => {
    //     useMapEvents({
    //       click(e) {
    //         setMarkers([...markers, e.latlng]);
    //       }
    //     });
    //     return null;
    //   };
    
    const position = [13.736717, 100.523186]; // พิกัดกรุงเทพฯ

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Bangkok</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
