import Head from "next/head";
import Map from "../../components/Map";
import { graphql } from "../../gql";
import { graphqlClient } from "../../lib/graphql-client";

const GetAllMarkersDocument = graphql(`
  query GetMarkers {
    restaurant {
      name
    }
  }
`);

export default async function Markers() {
  const { restaurant } = await graphqlClient.request(GetAllMarkersDocument);

  return (
    <div>
      <Head>
        <title>****</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-auto">
        <Map />
      </div>
    </div>
  );
}
