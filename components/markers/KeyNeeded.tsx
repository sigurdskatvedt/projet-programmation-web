"use client";
import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { Restaurant } from "../../types";
import { MarkerGR } from "../Map";

export function KeyNeeded(restaurant: Restaurant) {
  function handleClick(e) {
    e.preventDefault();
    setPressed(true);
  }
  const [pressed, setPressed] = useState(false);

  let restaurantNameParse = restaurant.name.split(" ").join("_");
  let iconObject = new MarkerGR({
    iconUrl: "marker-icons/" + restaurantNameParse + ".png",
  });

  return (
    <>
      {pressed ? null : (
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
      )}
    </>
  );
}
