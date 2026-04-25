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
    } else {
      message = "Failed to submit booking, please try again.";
    }
  }
</script>

<h1>Book Service</h1>

<form onsubmit={submitBooking}>
  <input placeholder="Name" bind:value={name} required/>
  <input placeholder="Email" bind:value={email} required/>
  <input type="date" bind:value={date} required/>
  <textarea placeholder="Notes" bind:value={notes}></textarea>

  <button type="submit">Submit Booking</button>
</form>
<p>{message}</p>
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