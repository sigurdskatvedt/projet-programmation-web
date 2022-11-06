// src/models/User.ts

import { builder } from "../graphql/builder";
import { prisma } from "../graphql/db";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    messages: t.relation("messages", {}),
  }),
});

builder.queryField("users", (t) =>
  // 2
  t.prismaField({
    // 3
    type: ["User"],
    // 4
    resolve: async (query, root, args, ctx, info) => {
      return prisma.user.findMany({ ...query });
    },
  })
);
