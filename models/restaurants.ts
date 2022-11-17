// src/models/User.ts

import { builder } from "../graphql/builder";
import { prisma } from "../graphql/db";

builder.prismaObject("restaurant", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
  }),
});

builder.queryField("restaurant", (t) =>
  // 2
  t.prismaField({
    // 3
    type: ["restaurant"],
    // 4
    resolve: async (query, root, args, ctx, info) => {
      return prisma.restaurant.findMany({ ...query });
    },
  })
);
