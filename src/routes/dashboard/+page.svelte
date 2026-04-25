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
</script>

<h1>Dashboard</h1>

<h2>My Bookings</h2>
{#if loading}
  <p>Loading bookings...</p>

    {:else if bookings.length === 0}
    <p>You have no bookings yet.</p>
    {:else}
    {#each bookings as booking}
        <div class="booking">
        <h3>{booking.service_name}</h3>
        <p>Date: {booking.date}</p>
        <p>Status: {booking.status}</p>
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
</style>