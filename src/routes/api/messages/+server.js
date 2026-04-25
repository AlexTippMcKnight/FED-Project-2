// @ts-nocheck
import { db } from "$lib/server/db";

export async function GET() {
  const result = await db.execute(`
    SELECT *
    FROM contact_messages
    ORDER BY created_at DESC
  `);

  return new Response(JSON.stringify(result.rows), {
    headers: { "Content-Type": "application/json" }
  });
}

export async function POST({ request }) {
  const data = await request.json();

  const name = data.name?.trim();
  const email = data.email?.trim().toLowerCase();
  const message = data.message?.trim();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "All fields are required" }),
      { status: 400 }
    );
  }

  await db.execute({
    sql: `
      INSERT INTO contact_messages (name, email, message)
      VALUES (?, ?, ?)
    `,
    args: [name, email, message]
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" }
  });
}