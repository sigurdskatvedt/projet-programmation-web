# Projet Programmation Web

## Instruction for setup

- Install [Docker](https://www.docker.com/products/docker-desktop/).
- Navigate inside project and run `docker compose up -d`
- Open Docker Desktop. Expand "project-programmation-web" and click "app-1". You can follow the progress of installing the package needed for the server. It might take a while depending on your computer/internet connection.
- Open a terminal, navigate inside project folder and run `docker exec -i projet-programmation-web-db-1 /bin/bash -c "PGPASSWORD=postgres psql --username postgres postgres" < ./data/dbdata.sql` to fill your new database with data from a SQL dump file located in /data/
- In Docker -> app-1, select "CLI" in the top right and enter `yarn prisma generate` to generate Prisma Client-database needed for GraphQL API.
- Open [localhost:3000](localhost:3000) in your browser. (You can open GraphQL-playground at [localhost:3000](localhost:3000/api/graphql). First time you open the website after starting the server will take longer because it starts the API server as well.

## Instructions for completing the game

<em>All these can be done in random order</em>

- Enter your name in the bottom right and press OK to start the game.
- Press icon of the Torii (Japanse Arch). Press OK to add it to your inventory. Doesn't work because you need another item found near Montparnasse.
- Close the marker, navigate to just north of Gare Montparnasse. Zoom in and you will find a book-item. Click it and OK to add it to your inventory.
- Select the icon of a horseshoe. Press OK to add to inventory.
- Press the icon of a pizza slice. Enter the code "1861" (can be found by navigating to the Italian flag). \
  **You should have finished the game.**

## Issues

The project is using Nextjs 13 beta and we ran into some problems/bugs:

- The database connection sometimes randomly stops works so the website crashes.
- Attempting to add data back to the data using the GraphQL API (when you need add your score after finish) causes a crash because of a bug in Nextjs 13.

## What is not implemented

We are lacking:

- Adding scores back to the database (because if the bug described over).
- We therefore haven't implemented the score function at the top either.

## Workflow

- We had somewhat differing levels of competance with Javascript/React/frameworks. One of us was in charge of setting up the server, implementing the GraphQL API and the game logic. The other started with drafting a template for the UI using [Figma](https://www.figma.com/) and started with making the UI using CSS.
- We tried to work with a somewhat agile approach, setting timelines of which parts should be finished when and started with a minimum viable product and building from there.

# Description of the architecture

## Introduction

Initial project skeleton from with-docker example (https://github.com/vercel/next.js/tree/canary/examples/with-docker) \

### Technologies used

- Docker for intercompability
- Yarn as package manager
- GitHub as git provider
- Next.js as the React framework (Using Next.js 13 beta so syntax and code structure [will be slightly different than older versions of Next.js)](https://nextjs.org/blog/next-13)
- GraphQL API with GraphQL Yoga as server, Pothos as schema builder, GraphQL Codegen for type safety
- Prisma as the ORM for migrations and database access
- PostgreSQL as the database
- TypeScript as the programming language
- Leaflet for client-side map rendering
- Redux for state handling

### API

- Prisma will generate types based off of your database schema.
- Pothos will use those types to expose GraphQL types via an API.
- GraphQL Codegen will read your GraphQL schema and generate types for your frontend codebase representing what is available via the API and how to interact with it.

#### Adding new element and query starting with database

- Add to database
- Update Prisma schema, prisma.schema (use command <em>prisma db pull</em>)
- Generate Prisma Client database (use command <em>prisma generate</em>
- Build model of new object with queries in <em>/models.ts</em>
- Import model in <em>/graphql/schema.ts</em>
- Generate new document somewhere in the code, example:

```
const GetAllUsersDocument = graphql(/* GraphQL */ `
    query GetUsers {
      users {
        name
        messages {
          body
        }
      }
    }
    `);
```
