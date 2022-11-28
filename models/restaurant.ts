// src/models/User.ts

import { builder } from "../graphql/builder";
import { prisma } from "../graphql/db";

builder.prismaObject("restaurants", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    lvl_zoom: t.exposeInt("lvl_zoom"),
    type_object: t.exposeString("type_object"),
    file_name: t.exposeString("file_name"),
    hint: t.exposeString("hint"),
    coordinates: t.exposeFloatList("coordinates"),
  }),
});

builder.queryField("restaurants", (t) =>
  // 2
  t.prismaField({
    // 3
    type: ["restaurants"],
    // 4
    resolve: async (query, root, args, ctx, info) => {
      return prisma.restaurants.findMany({ ...query });
    },
  })
);
