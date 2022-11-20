"use client";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvent,
  Popup,
} from "react-leaflet";
import { Restaurant } from "../types";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map({ restaurant }) {
  const restaurantObject = restaurant as Restaurant[];

  const [geoData, setGeoData] = useState({
    lat: 48.84211498289338,
    lng: 2.3219922799949586,
  });

  const center: [number, number] = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={12} className="h-screen">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {restaurantObject?.map((restaurant) => {
        console.log(restaurant);
        return (
          <Marker
            position={[restaurant.coordinates[1], restaurant.coordinates[0]]}
          >
            <Popup>
              {restaurant.name}
              <br />
              {restaurant.hint}
            </Popup>
          </Marker>
        );
      })}

      <ChangeView coords={center} />
    </MapContainer>
  );
}
