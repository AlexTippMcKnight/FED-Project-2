<script>
// @ts-nocheck
  
  import { page } from "$app/state";

  const serviceId = page.params.id;

  let name = $state("");
  let email = $state("");
  let date = $state("");
  let notes = $state("");

  async function submitBooking(event) {
    event.preventDefault();

    await fetch("/api/bookings", {
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

    alert("Booking submitted");
  }
</script>

<h1>Book Service</h1>

<form onsubmit={submitBooking}>
  <input placeholder="Name" bind:value={name} />
  <input placeholder="Email" bind:value={email} />
  <input type="date" bind:value={date} />
  <textarea placeholder="Notes" bind:value={notes}></textarea>

  <button type="submit">Submit Booking</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
  }

  input, textarea {
    padding: 8px;
  }
</style>