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
import L from "leaflet";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  map.invalidateSize();
  return null;
}

const MarkerGR = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [0, 0],
    popupAnchor: [50, 50],
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
        let restaurantNameParse = restaurant.name.split(" ").join("_");
        let iconObject = new MarkerGR({
          iconUrl: "marker-icons/" + restaurantNameParse + ".png",
        });

        return (
          <Marker
            position={[restaurant.coordinates[1], restaurant.coordinates[0]]}
            icon={iconObject}
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
