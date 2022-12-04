"use client";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { toggleFill } from "../../redux/slices/tasksSlice";
import { RootState } from "../../redux/store";
import { Restaurant } from "../../types";
import { MarkerGR } from "../Map";
import MarkerCommon from "./MarkerCommon";

type Props = {
  restaurant: Restaurant;
};

export function KeyNeeded({ restaurant }: Props) {
  const [zoomLevel, setZoomLevel] = useState(5);
  const [keyNeededPressed, setKeyNeededPressed] = useState(false);
  const dispatch = useDispatch();
  const states = useSelector((state: RootState) => state.tasks);

  let restaurantNameParse =
    "/marker-icons/" + restaurant.name.split(" ").join("_") + ".png";

  function handleClick(e) {
    e.preventDefault();
    if (!states.key) {
      alert("You need the key!");
    } else {
      dispatch(toggleFill(restaurantNameParse));
      setKeyNeededPressed(true);
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
      {zoomLevel <= 16
        ? keyNeededPressed
          ? null
          : MarkerCommon(restaurant, iconObject, handleClick)
        : null}
    </>
  );
}
