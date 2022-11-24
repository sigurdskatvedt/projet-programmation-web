import Head from "next/head";

import Map from "../components/Map";
import { graphql } from "../gql";
import { graphqlClient } from "../lib/graphql-client";

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
        <Map restaurant={restaurant} />
      </div>
    </div>
  );
}
