<script>
// @ts-nocheck

  let name = $state("");
  let email = $state("");
  let message = $state("");
  let feedback = $state("");

  async function sendMessage(event) {
    event.preventDefault();

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    if (res.ok) {
      feedback = "Message sent successfully.";
      name = "";
      email = "";
      message = "";
      setTimeout(() => {
        feedback = "";
      }, 4000);
    } else {
      feedback = "Please complete all fields.";
    }
  }
</script>

<h1>Contact Us</h1>

<form onsubmit={sendMessage}>
  <input placeholder="Name" bind:value={name} required />
  <input type="email" placeholder="Email" bind:value={email} required />
  <textarea placeholder="Message" bind:value={message} required></textarea>

  <button type="submit">Send Message</button>
</form>

<p>{feedback}</p>

<style>
  textarea {
    min-height: 120px;
  }
</style>