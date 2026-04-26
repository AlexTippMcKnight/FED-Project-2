<script>
// @ts-nocheck

    import servicesJSON from "$lib/data/services.json";
    import ServiceCard from "$lib/components/ServiceCard.svelte";
    import { onMount } from "svelte";

    let services = $state([]);
    let loading = $state(true);
    let fallbackServices = $state([]);

    async function loadServices() {
        const res = await fetch("/api/services");
        services = await res.json();
        loading = false;
        if (services.length === 0) {
            fallbackServices = servicesJSON;
        }
    }

    onMount(loadServices);
</script>

<h1>Services</h1>
{#if loading}
    <p>Loading services...</p>
{:else if services.length > 0}
  {#each services as service}
    <ServiceCard {service} />
  {/each}
{:else}
  {#each fallbackServices as service}
    <ServiceCard {service} />
  {/each}
{/if}
<style>
    .serviceGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }
</style>
