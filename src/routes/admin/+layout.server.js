// @ts-nocheck
export function load({ cookies }) {
  const role = cookies.get("role");

  return {
    isAdmin: role === "admin"
  };
}