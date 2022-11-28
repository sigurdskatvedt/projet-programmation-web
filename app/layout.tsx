import "../styles/globals.css";
import { graphql } from "../gql";
import { graphqlClient } from "../lib/graphql-client";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
