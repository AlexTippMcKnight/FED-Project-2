// @ts-nocheck
import { db } from "$lib/server/db";

export async function POST({ request }) {
  const data = await request.json();

  const name = data.name;
  const email = data.email.toLowerCase();
  const password = data.password;

  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({ error: "All fields are required." }),
      { status: 400 }
    );
  }

  const existingUser = await db.execute({
    sql: "SELECT * FROM users WHERE email = ?",
    args: [email]
  });

  if (existingUser.rows.length > 0) {
    return new Response(
      JSON.stringify({ error: "An account with this email already exists." }),
      { status: 400 }
    );
  }

  await db.execute({
    sql: "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    args: [name, email, password, "customer"]
  });

  return new Response(JSON.stringify({ success: true }));
}