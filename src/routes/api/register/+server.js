// @ts-nocheck
import { db } from "$lib/server/db";

export async function POST({ request }) {
  const data = await request.json();

    const name = data.name;
    const email = data.email.toLowerCase();
    const password = data.password;

  await db.execute({
    sql: "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    args: [name, email, password, "customer"]
  });

  return new Response(JSON.stringify({ success: true }));
}