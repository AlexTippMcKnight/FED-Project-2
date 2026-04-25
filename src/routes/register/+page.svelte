<script>
// @ts-nocheck

  let name = $state("");
  let email = $state("");
  let password = $state("");
  let message = $state("");

  async function register(event) {
    event.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    if (res.ok) {
      window.location.href = "/login";
    } else {
      message = "Registration failed.";
    }
  }
</script>

<h1>Register</h1>

<form onsubmit={register}>
    <input placeholder="Name" bind:value={name} required />
    
    <input type="email" placeholder="Email" bind:value={email} required />
   
    <input type="password" placeholder="Password" bind:value={password} required />
  
    <button type="submit">Register</button>
</form>

<p>{message}</p>

<p>
    Already have an account?
  <a href="/login">Login here</a>
</p>