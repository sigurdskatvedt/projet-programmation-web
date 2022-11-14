import Head from "next/head";
// import { atom, useRecoilState } from "recoil";

import Map from "../components/Map";

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
