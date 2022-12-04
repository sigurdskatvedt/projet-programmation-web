// src/builder.ts

import SchemaBuilder from "@pothos/core";
import { DateResolver, ByteResolver } from "graphql-scalars";
import PrismaPlugin from "@pothos/plugin-prisma";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import type PrismaTypes from "@pothos/plugin-prisma";
import { prisma } from "./db";

// 2
export const builder = new SchemaBuilder<{
  PrismaTypes: typeof PrismaTypes;
}>({
  plugins: [PrismaPlugin, SimpleObjectsPlugin],
  prisma: {
    client: prisma,
  },
});

// Fix this:

builder.queryType({});
builder.mutationType({});
