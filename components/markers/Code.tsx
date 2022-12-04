"use client";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useDispatch } from "react-redux";
import { toggleFill } from "../../redux/slices/tasksSlice";
import { Restaurant } from "../../types";
import { MarkerGR } from "../Map";
import MarkerCommon from "./MarkerCommon";

type Props = {
  restaurant: Restaurant;
};

export function Code({ restaurant }: Props) {
  const [zoomLevel, setZoomLevel] = useState(5);
  const [codePressed, setCodePressed] = useState(false);

  let restaurantNameParse =
    "/marker-icons/" + restaurant.name.split(" ").join("_") + ".png";

  function handleClick(e) {
    e.preventDefault();
    setCodePressed(true);
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
      {zoomLevel <= 16
        ? codePressed
          ? null
          : MarkerCommon(restaurant, iconObject, handleClick)
        : null}
    </>
  );
}
