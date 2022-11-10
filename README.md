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

### General idea of the game
- All the following points are of course open to discussion.
- The name of the game will be GeoResto.
- It's general goal will be to access various restaurants in Paris (which I have personally tried).
- The game is going to load all the restaurants at the loading of the page, the most obvious and accessible will be Shinko, located near Opera (and whose geographical coordinates are given by Maps as it will be the case for all restaurants).
- Shinko will be seen with little zoom, and requires an object "proof of reservation", located on the Montparnasse tower.
- The second restaurant will be "The Village Terrazza" located in the south of Paris and which need a code to be opened and, as it is Italian, the hint is to go to the 
place of Italy in Paris, which will give the code 1861 to be filled and that corresponds to the unification of Italy.
- Then there's gonna be an easy French restaurant in the "Marais" with no required object nor code. 
- Other restaurants will come, but that list is the very minimum for our game to be accepted. 
- To get the score, the idea is to have a decreasing score with time that is reinitialized every time the player gets an object in his inventory. As every player will eventually have the same amount of objects, their score will only depend on their speed to complete the game.
