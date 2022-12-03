"use client";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useDispatch } from "react-redux";
import { toggleFill } from "../../redux/slices/tasksSlice";
import { Restaurant } from "../../types";
import { MarkerGR } from "../Map";

type Props = {
  restaurant: Restaurant;
};

export function CodeNeeded({ restaurant }: Props) {
  const [zoomLevel, setZoomLevel] = useState(5);
  const [codeChangePressed, setCodeChangePressed] = useState(false);
  const [code, setCode] = useState(null);
  const dispatch = useDispatch();

  let restaurantNameParse =
    "/marker-icons/" + restaurant.name.split(" ").join("_") + ".png";

  function handleClick(e) {
    e.preventDefault();
    if (code == "1861") {
      setCodeChangePressed(true);
      dispatch(toggleFill(restaurantNameParse));
    } else {
      alert("Wrong key!");
    }
  }

  const mapEvents = useMapEvents({
    zoomend: () => {
      console.log(zoomLevel);
      setZoomLevel(mapEvents.getZoom());
    },
  });
  let iconObject = MarkerGR(restaurantNameParse);

  return (
    <>
      {zoomLevel <= 16 ? (
        codeChangePressed ? null : (
          <Marker
            position={[restaurant.coordinates[1], restaurant.coordinates[0]]}
            icon={iconObject}
          >
            <Popup>
              {restaurant.name}
              <br />
              {restaurant.hint}
              <input onChange={(e) => setCode(e.target.value)}></input>
              <button onClick={handleClick}>OK</button>
            </Popup>
          </Marker>
        )
      ) : null}
    </>
  );
}
