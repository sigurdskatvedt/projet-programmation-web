import "./globals.css";
import { graphql } from "../gql";
import { graphqlClient } from "../lib/graphql-client";
import UserDisplay from "../components/UserDisplay";
import Link from "next/link";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { users } = await graphqlClient.request(GetAllUsersDocument);

  return (
    <html>
      <head></head>
      <body>
        {users.map((user, i) => (
          <UserDisplay user={user} key={i} />
        ))}
        {children}
      </body>
    </html>
  );
}
