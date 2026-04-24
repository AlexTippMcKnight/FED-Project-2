// @ts-nocheck
import { db } from "$lib/server/db";

export async function POST({ request }) {
  const { service_id, name, email, date, notes } = await request.json();

  await db.execute({
    sql: `
      INSERT INTO bookings (service_id, name, email, date, notes)
      VALUES (?, ?, ?, ?, ?)
    `,
    args: [service_id, name, email, date, notes]
  });

  return new Response(JSON.stringify({ success: true }));
}