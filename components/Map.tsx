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

// var shelter1 = L.marker([55.08, 11.62], {icon: shelterIcon});

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

  function Markers(restaurant) {
    const [zoomLevel, setZoomLevel] = useState(5);
    const [pressed, setPressed] = useState(false);

    function handleClick(e) {
      e.preventDefault();
      setPressed(true);
    }

    const mapEvents = useMapEvents({
      zoomend: () => {
        setZoomLevel(mapEvents.getZoom());
        console.log(zoomLevel);
      },
    });

    return restaurantObject?.map((restaurant) => {
      let restaurantNameParse = restaurant.name.split(" ").join("_");
      let iconObject = new MarkerGR({
        iconUrl: "marker-icons/" + restaurantNameParse + ".png",
      });

      console.log(zoomLevel);
      return (
        <>
          (
          {zoomLevel >= 16 ? (
            pressed ? null : (
              <Marker
                position={[
                  restaurant.coordinates[1],
                  restaurant.coordinates[0],
                ]}
                icon={iconObject}
              >
                <Popup>
                  {restaurant.name}
                  <br />
                  {restaurant.hint}
                  <button onClick={handleClick}>OK</button>
                </Popup>
              </Marker>
            )
          ) : null}
          )
        </>
      );
    });
  }

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
