<script>
// @ts-nocheck

  import { onMount } from "svelte";

  let messages = $state([]);
  let loading = $state(true);

  async function loadMessages() {
    const res = await fetch("/api/messages");
    messages = await res.json();
    loading = false;
  }

  onMount(loadMessages);
</script>

<div class="admin-links">
  <a href="/admin" class="btn">View Bookings</a>
</div>



{#if loading}
  <h1>Contact Messages</h1>
  <p>Loading messages...</p>
{:else if messages.length === 0}
  <h1>Contact Messages</h1>
  <p>No messages yet.</p>
{:else}
  <h1>Contact Messages - Total: {messages.length}</h1>
  {#each messages as message}
    <div class="card">
      <h3>{message.name}</h3>
      <p>Email: {message.email}</p>
      <p>{message.message}</p>
      <small>Sent: {message.created_at}</small>
    </div>
  {/each}
{/if}

<style>
  .admin-links {
    margin-bottom: 1.5rem;
  }
</style>