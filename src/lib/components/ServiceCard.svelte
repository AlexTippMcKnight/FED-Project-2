<script>
  let { service } = $props();
</script>

<div class="card">
  <h2>{service.name}</h2>
  <p>{service.description}</p>
  <p>Price: €{service.price}</p>
  <p>Duration: {service.duration}</p>

  <a href={`/book/${service.id}`} class="btn">
    Book Service
  </a>
</div>

<style>
  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
  }

  .btn {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.5rem 0.8rem;
    background: #1f3d2b;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
</style>