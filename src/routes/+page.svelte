<script>
  let { data } = $props();
</script>

<h1>Welcome to TippMcKnight Landscaping </h1>

<p>
  Professional garden maintenance and landscaping services including grass cutting,
  hedge trimming, weeding, and garden design.
</p>

<div class="cta">
  <a href="/services" class="btn">View Services</a>
  {#if data?.userId}
  <a href="/dashboard" class="btn">My Dashboard</a>
  {/if}
</div>

<style>
  .cta {
    margin-top: 1.5rem;
  }
</style>