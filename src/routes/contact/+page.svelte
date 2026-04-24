<script>
// @ts-nocheck

  let name = $state("");
  let email = $state("");
  let message = $state("");

  function submitForm(event) {
    event.preventDefault();
    alert("Message sent");
  }
</script>

<h1>Contact Us</h1>

<form onsubmit={submitForm}>
  <input placeholder="Name" bind:value={name} required />
  <br><br>
  <input type="email" placeholder="Email" bind:value={email} required />
  <br><br>  
  <textarea placeholder="Message" bind:value={message} required ></textarea>
    <br><br>
  <button type="submit">Send</button>
</form>