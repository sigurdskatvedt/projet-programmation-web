"use client";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
// import { useRecoilValue } from "recoil";
import { Geodata } from "../types/types";
// import { locationState } from "../atoms/atoms";
import { LatLngExpression } from "leaflet";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map() {
  // const geoData: Geodata = useRecoilValue(locationState);

  // const center: LatLngExpression = [geoData.lat, geoData.lng];
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });

  const center: LatLngExpression = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={12} className="h-screen">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
    </MapContainer>
  );
}
