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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type Query = {
  __typename?: "Query";
  restaurants: Array<Restaurants>;
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
