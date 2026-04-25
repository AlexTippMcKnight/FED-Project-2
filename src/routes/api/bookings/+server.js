// @ts-nocheck
import { db } from "$lib/server/db";

export async function GET({ url }) {
  const email = url.searchParams.get("email");

  if (email) {
    const result = await db.execute({
      sql: `
        SELECT bookings.*, services.name AS service_name
        FROM bookings
        JOIN services ON bookings.service_id = services.id
        WHERE LOWER(bookings.email) = LOWER(?)
      `,
      args: [email]
    });

    return new Response(JSON.stringify(result.rows), {
      headers: { "Content-Type": "application/json" }
    });
  }

  const result = await db.execute(`
    SELECT bookings.*, services.name AS service_name
    FROM bookings
    JOIN services ON bookings.service_id = services.id
  `);

  return new Response(JSON.stringify(result.rows), {
    headers: { "Content-Type": "application/json" }
  });
}
export async function POST({ request }) {
  const data = await request.json();

  const service_id = data.service_id;
  const name = data.name;
  const email = data.email.toLowerCase();
  const date = data.date;
  const notes = data.notes;

  await db.execute({
    sql: `
      INSERT INTO bookings (service_id, name, email, date, notes)
      VALUES (?, ?, ?, ?, ?)
    `,
    args: [service_id, name, email, date, notes]
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" }
  });
}
export async function PATCH({ request }) {
  const { id, status } = await request.json();

  await db.execute({
    sql: "UPDATE bookings SET status = ? WHERE id = ?",
    args: [status, id]
  });

  return new Response(JSON.stringify({ success: true }));
}