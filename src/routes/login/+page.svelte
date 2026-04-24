<script>
// @ts-nocheck
  let email = $state("");
  let password = $state("");
  let message = $state("");

  async function login(event) {
    event.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      window.location.href = "/";
    } else {
      message = "Invalid email or password.";
    }
  }
</script>

<h1>Login</h1>

<form onsubmit={login}>
  <input type="email" placeholder="Email" bind:value={email} required />
  <br><br>
  <input type="password" placeholder="Password" bind:value={password} required />
  <br><br>
  <button type="submit">Login</button>
</form>

<p>{message}</p>

<p>
  No account?
  <a href="/register">Register here</a>
</p>