import React from 'react';
import { MapContainer, TileLayer, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({lat, lng}) => {

    return (
        <MapContainer center={[lat, lng]}  zoom={11} scrollWheelZoom={false} style={{ height: '300px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};

export default Mapa;