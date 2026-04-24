// @ts-nocheck
import { db } from "$lib/server/db";

export async function GET() {
  const result = await db.execute(`
    SELECT bookings.*, services.name as service_name
    FROM bookings
    JOIN services ON bookings.service_id = services.id
  `);

  return new Response(JSON.stringify(result.rows));
}

export async function PATCH({ request }) {
  const { id, status } = await request.json();

  await db.execute({
    sql: "UPDATE bookings SET status = ? WHERE id = ?",
    args: [status, id]
  });

  return new Response(JSON.stringify({ success: true }));
}