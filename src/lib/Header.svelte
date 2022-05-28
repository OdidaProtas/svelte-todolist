<script>
  import { fly, fade } from "svelte/transition";
  import { formActive } from "../store/store";
  import Button from "./Button.svelte";
</script>

{#if $formActive}
  <section
    in:fly={{ y: 200, duration: 200 }}
    out:fly={{ y: 20, duration: 200 }}
  >
    <h4 transition:fade>TODO List</h4>
    <h3>Create a new Item</h3>
    <Button />
  </section>
  
{:else}
  <section
    in:fly={{ y: 200, duration: 1000 }}
    out:fly={{ y: 20, duration: 1000 }}
  >
    <h4 transition:fade>TODO List</h4>
    <h3>{new Date().toDateString()}</h3>
    <Button />
  </section>
{/if}

<style></style>
