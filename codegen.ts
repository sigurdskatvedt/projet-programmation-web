import type { CodegenConfig } from "@graphql-codegen/cli";

const url = process.env.GRAFBASE_API_URL as string;
const xApiKey = process.env.GRAFBASE_API_KEY as string;

const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          "x-api-key": xApiKey,
        },
      },
    },
  ],
  documents: ["app/**/*.tsx", "components/**/*.tsx"],
  generates: {
    "./gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
