import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const museums = [
  { id: 1, name: "Museum A", lat: 12.9716, lng: 77.5946 },
  { id: 2, name: "Museum B", lat: 28.6139, lng: 77.209 },
];

const MapComponent = () => {
  return (
    <MapContainer
      center={[20, 78]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {museums.map((museum) => (
        <Marker key={museum.id} position={[museum.lat, museum.lng]}>
          <Popup>
            {museum.name}
            <br />
            <button>Book Now</button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
