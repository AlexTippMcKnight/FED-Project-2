import { createClient } from "@libsql/client";

export const db = createClient({
  // @ts-ignore
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
});