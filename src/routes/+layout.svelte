<script>
  let { data , children } = $props();
</script>

<header class="nav">
  <div class="logo">TMcK Landscaping</div>

  <nav>
    <a href="/">Home</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
    <a href="/login">Login</a>
  </nav>
</header>

<main class="container">
  {@render children()}
</main>

<footer class="footer">
  <p>© {new Date().getFullYear()} TMcK Landscaping</p>
</footer>

<style>
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #1f3d2b;
    color: white;
  }

  .logo {
    font-weight: bold;
    font-size: 1.2rem;
  }

  nav a {
    margin-left: 1rem;
    color: white;
    text-decoration: none;
  }

  nav a:hover {
    text-decoration: underline;
  }

  .container {
    padding: 2rem;
    min-height: 70vh;
  }

  .footer {
    text-align: center;
    padding: 1rem;
    background: #f2f2f2;
    margin-top: 2rem;
  }
</style>