"use client";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Restaurant } from "../types";
import L, { Icon } from "leaflet";
import { KeyNeeded } from "./markers/KeyNeededMarker";
import { KeyMaker } from "./markers/KeyMaker";
import { CodeNeeded } from "./markers/CodeNeeded";
import { Code } from "./markers/Code";
import { RegularMarker } from "./markers/RegularMarker";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

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

// Giving restaurant type for Typescript
type Props = {
  restaurants: Restaurant[];
};

export default function Map({ restaurants }: Props) {
  const tasks = useSelector((state: RootState) => state.tasks);

  if (tasks.completed) {
    alert("You completed the game!");
  }
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

      <KeyNeeded restaurant={restaurants[0]} />
      <KeyMaker restaurant={restaurants[1]} />
      <CodeNeeded restaurant={restaurants[2]} />
      <Code restaurant={restaurants[3]} />
      <RegularMarker restaurant={restaurants[4]} />

      <ChangeView coords={center} />
    </MapContainer>
  );
}
