"use client";
import { useEffect, useState } from "react";
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
import { graphql } from "../gql";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { MyMutationMutation, Exact } from "../gql/graphql";
import { graphqlClient } from "../lib/graphql-client";

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

const NewScoreDocument = graphql(`
  mutation MyMutation($name: String!, $score: Int!) {
    createScore(name: $name, score: $score) {
      name
      score
    }
  }
`);

export default function Map({ restaurants }: Props) {
  const tasks = useSelector((state: RootState) => state.tasks);
  const [createScore, setCreateScore] = useState(null);

  if (tasks.completed) {
    useEffect(() => {
      async function sendFunc() {
        const { createScore } = await graphqlClient.request(NewScoreDocument, {
          name: tasks.name as string,
          score: tasks.score as number,
        });
        console.log(createScore.name);
        setCreateScore(createScore);
      }
      if (!createScore) {
        sendFunc();
      }
    }, []);
  }
  const [geoData, setGeoData] = useState({
    lat: 48.84211498289338,
    lng: 2.3219922799949586,
  });

  const center: [number, number] = [geoData.lat, geoData.lng];

  return (
    <>
      {tasks.started ? (
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
      ) : (
        <div className="h-screen">
          <h1>Not started</h1>
        </div>
      )}
    </>
  );
}
