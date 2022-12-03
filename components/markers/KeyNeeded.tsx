"use client";
import L, { Icon } from "leaflet";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Restaurant } from "../../types";
import { MarkerGR } from "../Map";

type Props = {
  restaurant: Restaurant;
};

export function KeyNeeded({ restaurant }: Props) {
  const [zoomLevel, setZoomLevel] = useState(5);
  const [pressed, setPressed] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setPressed(true);
  }

  const mapEvents = useMapEvents({
    zoomend: () => {
      console.log(zoomLevel);
      setZoomLevel(mapEvents.getZoom());
    },
  });
  let restaurantNameParse = restaurant.name.split(" ").join("_");
  let iconObject = MarkerGR(
    "marker-icons/" + restaurantNameParse + ".png"
  ) as Icon;

  return (
    <>
      {zoomLevel <= 16 ? (
        pressed ? null : (
          <Marker
            position={[restaurant.coordinates[1], restaurant.coordinates[0]]}
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
    </>
  );
}
