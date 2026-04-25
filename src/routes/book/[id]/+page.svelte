<script>
// @ts-nocheck
  import { onMount } from "svelte";
  import { page } from "$app/state";

  const serviceId = page.params.id;

  let name = $state("");
  let email = $state("");
  let date = $state("");
  let notes = $state("");
  let message = $state("");
  let service = $state(null);
  let loadingService = $state(true);

  async function loadService() {
    const res = await fetch("/api/services");
    const services = await res.json();

    service = services.find((item) => item.id == serviceId);
    loadingService = false;
  }

  onMount(loadService);

  async function submitBooking(event) {
    event.preventDefault();

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        name,
        email,
        date,
        notes
      })
    });

    if (res.ok) {
      message = "Booking submitted successfully!";
      name = "";
      email = "";
      date = "";
      notes = "";
      setTimeout(() => {
        message = "";
      }, 4000);
    } else {
      message = "Failed to submit booking, please try again.";
    }
  }
</script>

{#if loadingService}
  <p>Loading selected service...</p>
{:else if service}
  <div class="card">
    <h2>Selected Service: {service.name}</h2>
    <p>{service.description}</p>
    <p>Price: €{service.price}</p>
    <p>Duration: {service.duration}</p>
  </div>
  <h2>Book this Service</h2>
{:else}
  <p>Service not found.</p>
{/if}

<form onsubmit={submitBooking}>
  <input placeholder="Name" bind:value={name} required/>
  <input placeholder="Email" bind:value={email} required/>
  <input type="date" bind:value={date} required/>
  <textarea placeholder="Notes" bind:value={notes}></textarea>

  <button type="submit">Submit Booking</button>
</form>
<p>{message}</p>
<style>

</style>