import Head from "next/head";
import BottComp from "../components/main_ui/bottom";

import Map from "../components/Map";
import TopComp from "../components/main_ui/top";
import { graphql } from "../gql";
import { graphqlClient } from "../lib/graphql-client";
import "../styles/layout.css";

// Will be read when using "codegen"-command, will generate new query (or mutation) document in /gql/gql.ts
const GetAllMarkersDocument = graphql(`
  query GetMarkers {
    restaurants {
      name
      coordinates
      lvl_zoom
      hint
    }
  }
`);

export default async function Home() {
  // Execute GraphQL API request
  const { restaurants } = await graphqlClient.request(GetAllMarkersDocument);
  return (
    <div>
      <Head>
        <title>GeoResto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-auto">
        <TopComp />
        <Map restaurants={restaurants} />
        <BottComp />
      </div>
    </div>
  );
}
