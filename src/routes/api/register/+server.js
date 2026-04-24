// @ts-nocheck
import { db } from "$lib/server/db";

export async function POST({ request }) {
  const { name, email, password } = await request.json();

  await db.execute({
    sql: "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    args: [name, email, password, "customer"]
  });

  return new Response(JSON.stringify({ success: true }));
}