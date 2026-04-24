// @ts-nocheck
export function load({ cookies }) {
  return {
    userId: cookies.get("user_id"),
    role: cookies.get("role")
  };
}