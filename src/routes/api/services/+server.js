import { db } from "$lib/server/db";

export async function GET() {
  const result = await db.execute("SELECT * FROM services");

  return new Response(JSON.stringify(result.rows), {
    headers: { "Content-Type": "application/json" }
  });
}