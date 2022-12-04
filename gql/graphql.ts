/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  createScore: Scores;
};

export type MutationCreateScoreArgs = {
  name: Scalars["String"];
  score: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  restaurants: Array<Restaurants>;
  scores: Array<Scores>;
};

export type Restaurants = {
  __typename?: "restaurants";
  coordinates: Array<Scalars["Float"]>;
  file_name: Scalars["String"];
  hint: Scalars["String"];
  id: Scalars["ID"];
  lvl_zoom: Scalars["Int"];
  name: Scalars["String"];
  type_object: Scalars["String"];
};

export type Scores = {
  __typename?: "scores";
  id: Scalars["ID"];
  name: Scalars["String"];
  score: Scalars["Int"];
};

export type GetMarkersQueryVariables = Exact<{ [key: string]: never }>;

export type GetMarkersQuery = {
  __typename?: "Query";
  restaurants: Array<{
    __typename?: "restaurants";
    name: string;
    coordinates: Array<number>;
    lvl_zoom: number;
    hint: string;
  }>;
};

export type MyMutationMutationVariables = Exact<{
  name: Scalars["String"];
  score: Scalars["Int"];
}>;

export type MyMutationMutation = {
  __typename?: "Mutation";
  createScore: { __typename?: "scores"; name: string; score: number };
};

export const GetMarkersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMarkers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "restaurants" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "coordinates" } },
                { kind: "Field", name: { kind: "Name", value: "lvl_zoom" } },
                { kind: "Field", name: { kind: "Name", value: "hint" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMarkersQuery, GetMarkersQueryVariables>;
export const MyMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MyMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "score" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createScore" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "score" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "score" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "score" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyMutationMutation, MyMutationMutationVariables>;
