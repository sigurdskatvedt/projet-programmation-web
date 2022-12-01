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
  useMapEvent,
  MarkerProps,
} from "react-leaflet";
import { Restaurant } from "../types";
import L from "leaflet";
import { useStyleRegistry } from "styled-jsx";
import { KeyNeeded } from "./markers/KeyNeeded";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  map.invalidateSize();
  return null;
}

export const MarkerGR = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [50, 50],
    popupAnchor: [0, 0],
  },
});

const shinko = new MarkerGR({ iconUrl: "marker-icons/shinko.png" }),
  letter = new MarkerGR({ iconUrl: "marker-icons/letter.png" }),
  village = new MarkerGR({ iconUrl: "marker-icons/village_it.png" }),
  place = new MarkerGR({ iconUrl: "place_it.png" }),
  fercheval = new MarkerGR({ iconUrl: "fer_cheval.png" });

type Props = {
  restaurant: Restaurant;
};

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
        return KeyNeeded(restaurant);
      })}

      <ChangeView coords={center} />
    </MapContainer>
  );
}
