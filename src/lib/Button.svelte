<script>
  import { fly, fade } from "svelte/transition";
  import { formActive } from "../store/store";
</script>

<hr>
<div
  class="button-container"
  in:fly={{ x: 500, duration: 1000 }}
  out:fly={{ x: 400, duration: 1000 }}
>
  <button
    class="add-button"
    transition:fade
    on:click={() => formActive.set(!Boolean($formActive))}
  >
    {#if $formActive}
      <span transition:fade>Close</span>
    {:else}
      <span transition:fade>Add new</span>
    {/if}
  </button>
</div>

<style>
  .add-button {
    min-height: 40px;
    min-width: 100px;
    background-color:  #c05efe;
    border-radius: 4px;
  }
</style>
