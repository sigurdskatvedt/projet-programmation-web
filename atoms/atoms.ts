"use client";
import { atom } from "recoil";

export const locationState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: { lat: 48.8566, lng: 2.3522 }, // default value (aka initial value)
});
