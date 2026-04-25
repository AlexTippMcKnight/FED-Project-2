<script>
    import ServiceCard from "$lib/components/ServiceCard.svelte";
    import { onMount } from "svelte";

    // @ts-ignore
    let services = $state([]);
    let loading = $state(true);

    async function loadServices() {
        const res = await fetch("/api/services");
        services = await res.json();
        loading = false;
    }

    onMount(loadServices);
</script>

<h1>Services</h1>
{#if loading}
    <p>Loading services...</p>
{:else if services.length === 0}
    <p>No services available.</p>

{:else}
    <div class="cards">
        {#each services as service}
            <ServiceCard {service} />
        {/each}
    </div>
{/if}
<style>
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }
</style>
