import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  process.env.GRAFBASE_API_URL as string,
  {
    // Headers for API key if hosting in the future, not needed when working locally
    headers: {
      "x-api-key": process.env.GRAFBASE_API_KEY as string,
    },
  }
);
