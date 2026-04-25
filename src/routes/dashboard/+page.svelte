<script>
// @ts-nocheck

  import { onMount } from "svelte";

  let { data } = $props();

  let bookings = $state([]);
  let loading = $state(true);
  async function loadBookings() {
    const res = await fetch(`/api/bookings?email=${data.email}`);
    bookings = await res.json();
    loading = false;
  }

  onMount(loadBookings);

  let statusFilter = $state("all");

    let filteredBookings = $derived(
    statusFilter === "all"
        ? bookings
        : bookings.filter((booking) => booking.status === statusFilter)
    );
</script>

<h1>Dashboard</h1>


{#if loading}
<h2>My Bookings</h2>
  <p>Loading bookings...</p>

    {:else if filteredBookings.length === 0}
    <h2>My Bookings</h2>
    <div class="filters">
        <button onclick={() => statusFilter = "all"}>All</button>
        <button onclick={() => statusFilter = "pending"}>Pending</button>
        <button onclick={() => statusFilter = "confirmed"}>Confirmed</button>
        <button onclick={() => statusFilter = "completed"}>Completed</button>
    </div>
    <p>You have no bookings yet.</p>
    {:else}
    <h2>My Bookings | Total Bookings: {filteredBookings.length}</h2>
    <div class="filters">
        <button onclick={() => statusFilter = "all"}>All</button>
        <button onclick={() => statusFilter = "pending"}>Pending</button>
        <button onclick={() => statusFilter = "confirmed"}>Confirmed</button>
        <button onclick={() => statusFilter = "completed"}>Completed</button>
    </div>
    {#each filteredBookings as booking}
        <div class="booking">
        <h3>{booking.service_name}</h3>
        <p>Date: {booking.date}</p>
        <p class={"status " + booking.status}>
            Status: {booking.status}
        </p>
        <p>Notes: {booking.notes}</p>
        </div>
    {/each}
    
{/if}
<style>
  .booking {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
  }
    .status {
  font-weight: bold;
  }

  .pending {
    color: orange;
  }

  .confirmed {
    color: blue;
  }

  .completed {
    color: green;
  }

  .filters {
    margin-bottom: 1rem;
  }

  .filters button {
    margin-right: 0.3rem;
    padding: 0.2rem 0.4rem;
  }
</style>