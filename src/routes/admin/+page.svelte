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

  let statusFilter = $state("all");

    let filteredBookings = $derived(
    statusFilter === "all"
        ? bookings
        : bookings.filter((booking) => booking.status === statusFilter)
    );
</script>

<div class="admin-links">
  <a href="/admin/messages" class="btn">View Messages</a>
</div>
{#if loading}
<h1>Admin Dashboard</h1>
  <p>Loading bookings...</p>
{:else if bookings.length === 0}
<h1>Admin Dashboard</h1>
  <p>No bookings found.</p>
{:else}
<h1>Admin Dashboard - {filteredBookings.length} bookings</h1>
    <div class="filters">
    <button onclick={() => statusFilter = "all"}>All</button>
    <button onclick={() => statusFilter = "pending"}>Pending</button>
    <button onclick={() => statusFilter = "confirmed"}>Confirmed</button>
    <button onclick={() => statusFilter = "completed"}>Completed</button>
    </div>
{#each filteredBookings as booking}
  <div class="card">
    <h3>{booking.service_name}</h3>
    <p>{booking.name} ({booking.email})</p>
    <p>Date: {booking.date}</p>
    <p>Notes: {booking.notes} 
      {#if booking.notes.length === 0}
        N/A
      {/if}
    </p>
    <p class={"status " + booking.status}>
        Status: {booking.status}
    </p>

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
  .status {
  font-weight: bold;
  }

  .filters {
    margin-bottom: 1rem;
  }

  .filters button {
    margin-right: 0.3rem;
    padding: 0.2rem 0.4rem;
  }

  .admin-links {
    margin-bottom: 1.5rem;
  }
</style>