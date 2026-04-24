<script>
  let { data, children } = $props();

  async function goToLogin() {
    // log the user out first
    await fetch("/api/logout", {
      method: "POST"
    });

    // then go to login page
    window.location.href = "/login";
  }
</script>

{#if data.isAdmin}
  {@render children()}
{:else}
  <h1>Access Denied</h1>
  <p>You must be logged in as an admin to view this page.</p>

  <button onclick={goToLogin}>
    Login as admin
  </button>
{/if}