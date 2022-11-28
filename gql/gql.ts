/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetMarkers {\n    restaurants {\n      name\n      coordinates\n      lvl_zoom\n      hint\n    }\n  }\n": types.GetMarkersDocument,
};

export function graphql(source: "\n  query GetMarkers {\n    restaurants {\n      name\n      coordinates\n      lvl_zoom\n      hint\n    }\n  }\n"): (typeof documents)["\n  query GetMarkers {\n    restaurants {\n      name\n      coordinates\n      lvl_zoom\n      hint\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;