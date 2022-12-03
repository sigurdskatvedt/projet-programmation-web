"use client";
import {
  useState,
  useEffect,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Popup,
  useMapEvent,
  MarkerProps,
} from "react-leaflet";
import { Restaurant } from "../types";
import L, { Icon } from "leaflet";
import { useStyleRegistry } from "styled-jsx";
import { KeyNeeded } from "./markers/KeyNeeded";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  map.invalidateSize();
  return null;
}

export function MarkerGR(fileString: string) {
  return new L.Icon({
    iconUrl: fileString,
    iconSize: [100, 100],
    iconAnchor: [50, 50],
    popupAnchor: [0, 0],
  }) as Icon;
}

// var shelter1 = L.marker([55.08, 11.62], {icon: shelterIcon});

// Giving restaurant type for Typescript
type Props = {
  restaurants: Restaurant[];
};

export default function Map({ restaurants }: Props) {
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

      {restaurants?.map((restaurant, index) => {
        return <KeyNeeded restaurant={restaurant} key={index} />;
      })}

      <ChangeView coords={center} />
    </MapContainer>
  );
}
