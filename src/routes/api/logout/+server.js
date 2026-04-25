// @ts-nocheck
export async function POST({ cookies }) {
  cookies.delete("user_id", { path: "/" });
  cookies.delete("role", { path: "/" });
  cookies.delete("email", { path: "/" });
  cookies.delete("name", { path: "/" });

  return new Response(JSON.stringify({ success: true }));
}