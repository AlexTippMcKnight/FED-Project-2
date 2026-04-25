<script>
  import { page } from "$app/state";
</script>

<h1>Page Not Found</h1>

<p>Sorry, this page could not be found.</p>

<p>Error code: {page.status}</p>

<a href="/" class="btn">Return home</a>