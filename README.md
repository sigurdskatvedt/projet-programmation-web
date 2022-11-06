# Projet Programmation Web

## Introduction

Project for ENSG course Programmation Web.

Using new React 18 Server Components and Next.js 13s new routing paradigm 

Initial project skeleton from with-docker example (https://github.com/vercel/next.js/tree/canary/examples/with-docker) \
API based on tutorial from https://vercel.com/guides/nextjs-prisma-postgres

### Technologies used

- Docker for intercompability
- Yarn as package manager
- GitHub as git provider
- Next.js as the React framework
- GraphQL API with GraphQL Code Genereator as schema builder
- Prisma as the ORM for migrations and database access
- PostgreSQL as the database with PostGIS extension for map-related queries
- NextAuth.js for authentication via GitHub (OAuth)
- TypeScript as the programming language
- Vercel for deployment
- Leaflet for client-side map rendering

### API
- Prisma will generate types based off of your database schema.
- Pothos will use those types to expose GraphQL types via an API.
- GraphQL Codegen will read your GraphQL schema and generate types for your frontend codebase representing what is available via the API and how to interact with it.
