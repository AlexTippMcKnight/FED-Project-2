// @ts-nocheck
import { db } from "$lib/server/db";

export async function POST({ request, cookies }) {
  const data = await request.json();

  const email = data.email.toLowerCase();
  const password = data.password;
  
  const result = await db.execute({
    sql: "SELECT * FROM users WHERE email = ? AND password = ?",
    args: [email, password]
  });

  const user = result.rows[0];

  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid login" }), {
      status: 401
    });
  }

  cookies.set("user_id", user.id, {
    path: "/",
    httpOnly: true,
    sameSite: "strict"
  });

  cookies.set("role", user.role, {
    path: "/",
    httpOnly: true,
    sameSite: "strict"
  });

  cookies.set("email", user.email, {
    path: "/",
    httpOnly: true,
    sameSite: "strict"
  });

  return new Response(JSON.stringify({ success: true }));
}