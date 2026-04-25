<script>
// @ts-nocheck
    
  import { onMount } from "svelte";

  let bookings = $state([]);
  let loading = $state(true);
  async function loadBookings() {
    const res = await fetch("/api/bookings");
    bookings = await res.json();
    loading = false;
  }

  async function updateStatus(id, status) {
    await fetch("/api/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status })
    });

    loadBookings();
  }

  onMount(loadBookings);
</script>

<h1>Admin Dashboard</h1>
{#if loading}
  <p>Loading bookings...</p>
{:else if bookings.length === 0}
  <p>No bookings found.</p>
{:else}
{#each bookings as booking}
  <div class="card">
    <h3>{booking.service_name}</h3>
    <p>{booking.name} ({booking.email})</p>
    <p>Date: {booking.date}</p>
    <p>Status: {booking.status}</p>

    <button onclick={() => updateStatus(booking.id, "confirmed")}>
      Confirm
    </button>

    <button onclick={() => updateStatus(booking.id, "completed")}>
      Complete
    </button>
  </div>
{/each}
{/if}
<style>
  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
  }
</style>