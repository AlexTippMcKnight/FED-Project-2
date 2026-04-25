<script>
// @ts-nocheck
  import "../app.css";
  let { data, children } = $props();

  async function logout() {
    await fetch("/api/logout", {
      method: "POST"
    });

    window.location.href = "/";
  }
</script>

<header class="nav">
  <div class="logo">TMcK Landscaping</div>
  
  <nav>
    <a href="/" class="btn">Home</a>
    <a href="/services" class="btn">Services</a>
    <a href="/contact" class="btn">Contact</a>

    {#if data?.role === "admin"}
      <a href="/admin" class="btn">Admin</a>
    {/if}
    
    {#if data?.userId}
      <a href="/dashboard" class="btn">My Dashboard</a>
      <button onclick={logout} class="btn">Logout</button>
    {:else}
      <a href="/login" class="btn">Login</a>
      <a href="/register" class="btn">Register</a>
    {/if}
    
  </nav>
  {#if data?.userId}
    <div class="user-info">User: {data.name} | Role: {data.role}</div>
  {/if}
</header>

<main class="container">
  {@render children()}
</main>

<footer class="footer">
  <p>© 2026 TMcK Landscaping</p>
</footer>

<style>

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    background: #1f3d2b;
    color: white;
  }

  .logo {
    font-weight: bold;
    font-size: 1.5rem;
  }

  nav {
    display: flex;
    gap: 0.7rem;
    flex-wrap: wrap;
  }

  nav a,
  nav button {
    color: white;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
  }

  nav a:hover,
  nav button:hover {
    text-decoration: underline;
    opacity: 0.85;
  }

  nav .btn {
    background: #f5f2e8;
    color: #27513a;
    border: none;
  }

  nav .btn:hover {
    background: #eae4d6;
  }

  .user-info {
    font-size: 0.9rem;
    white-space: nowrap;
  }
  .container {
    padding: 2rem;
    min-height: 70vh;
  }

  .footer {
    text-align: center;
    padding: 1rem;
    background: #ece7dd;
    margin-top: 2rem;
    border-top: 1px solid #dcd6cc;
  }
</style>