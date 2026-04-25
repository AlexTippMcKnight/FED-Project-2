// @ts-nocheck
export function load({ cookies }) {
  const email = cookies.get("email");

  return {
    isLoggedIn: !!email,
    email
  };
}