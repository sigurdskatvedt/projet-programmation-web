import Head from "next/head";
import prisma from "../lib/prisma";
import { createServer } from "@graphql-yoga/node";
import { schema } from "../graphql/schema";

export default function Home() {
  return <h1>Hello World</h1>;
}
