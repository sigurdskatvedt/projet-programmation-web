import Head from "next/head";

import Map from "../components/Map";
const DEFAULT_CENTER = [38.907132, -77.036546];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-auto">
        <Map />
      </div>
    </div>
  );
}
