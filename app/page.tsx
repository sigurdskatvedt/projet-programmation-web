import Head from "next/head";
import BottComp from "../components/bottom";

import Map from "../components/Map";
import TopComp from "../components/top";
import { graphql } from "../gql";
import { graphqlClient } from "../lib/graphql-client";
import "../styles/layout.css";

const GetAllMarkersDocument = graphql(`
  query GetMarkers {
    restaurant {
      name
      coordinates
      lvl_zoom
      hint
    }
  }
`);

export default async function Home() {
  const { restaurant } = await graphqlClient.request(GetAllMarkersDocument);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-auto">
        <TopComp />
        <Map restaurant={restaurant} />
        <BottComp />
      </div>
    </div>
  );
}
