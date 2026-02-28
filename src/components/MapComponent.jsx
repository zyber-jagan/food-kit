import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useGeolocation } from '../hooks/useGeolocation';
import { useEffect } from 'react';

// Fix for default marker icon in React Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// Component to recenter map when location changes
function RecenterMap({ lat, lng }) {
    const map = useMap();
    useEffect(() => {
        map.flyTo([lat, lng], 13);
    }, [lat, lng, map]);
    return null;
}

const MapComponent = ({ items = [] }) => {
    const location = useGeolocation();

    // Default items if none provided (for demo)
    const demoItems = [
        { id: 1, lat: 20.5937, lng: 78.9629, title: 'Rice & Curry', status: 'Available' },
        { id: 2, lat: 20.6000, lng: 78.9700, title: 'Fresh Fruits', status: 'Reserved' },
    ];

    const mapItems = items.length > 0 ? items : demoItems;

    return (
        <div className="h-full w-full rounded-xl overflow-hidden shadow-inner border border-slate-200">
            <MapContainer
                center={[location.coordinates.lat, location.coordinates.lng]}
                zoom={5}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {location.loaded && !location.error && (
                    <RecenterMap lat={location.coordinates.lat} lng={location.coordinates.lng} />
                )}

                {/* User Location Marker */}
                {location.loaded && !location.error && (
                    <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
                        <Popup>
                            You are here
                        </Popup>
                    </Marker>
                )}

                {/* Food Items Markers */}
                {mapItems.map(item => (
                    <Marker key={item.id} position={[item.lat, item.lng]}>
                        <Popup>
                            <div className="p-2">
                                <h3 className="font-bold text-slate-800">{item.title}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                                    {item.status}
                                </span>
                                <button className="block w-full mt-2 px-3 py-1 bg-primary text-white text-xs rounded-md hover:bg-primary-dark">
                                    View Details
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
