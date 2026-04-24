<script>
    import ServiceCard from "$lib/components/ServiceCard.svelte";
    import { onMount } from "svelte";

    // @ts-ignore
    let services = $state([]);

    async function loadServices() {
        const res = await fetch("/api/services");
        services = await res.json();
    }

    onMount(loadServices);
</script>

<h1>Services</h1>

<div class="cards">
    {#each services as service}
        <ServiceCard {service} />
    {/each}
</div>

<style>
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }
</style>
