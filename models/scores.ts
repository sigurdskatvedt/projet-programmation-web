// src/models/User.ts

import { builder } from "../graphql/builder";
import { prisma } from "../graphql/db";

export const Scores = builder.prismaObject("scores", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    score: t.exposeInt("score"),
  }),
});

builder.queryField("scores", (t) =>
  // 2
  t.prismaField({
    // 3
    type: ["scores"],
    // 4
    resolve: async (query, root, args, ctx, info) => {
      return prisma.scores.findMany({ ...query });
    },
  })
);

builder.mutationField("createScore", (t) =>
  t.field({
    type: Scores,
    args: {
      name: t.arg.string({ required: true }),
      score: t.arg.int({ required: true }),
    },
    resolve: async (root, args, ctx) => {
      return await prisma.scores.create({
        data: args,
      });
    },
  })
);
