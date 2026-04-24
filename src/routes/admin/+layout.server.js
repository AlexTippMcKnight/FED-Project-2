// @ts-nocheck
export function load({ cookies }) {
  const role = cookies.get("role");

  if (role !== "admin") {
    throw new Error("Not authorised");
  }

  return {};
}