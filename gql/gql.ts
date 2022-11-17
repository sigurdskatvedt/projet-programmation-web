/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetUsers {\n    users {\n      name\n      messages {\n        body\n      }\n    }\n  }\n": types.GetUsersDocument,
    "\n  query GetMarkers {\n    restaurant {\n      name\n    }\n  }\n": types.GetMarkersDocument,
};

export function graphql(source: "\n  query GetUsers {\n    users {\n      name\n      messages {\n        body\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    users {\n      name\n      messages {\n        body\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetMarkers {\n    restaurant {\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetMarkers {\n    restaurant {\n      name\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;