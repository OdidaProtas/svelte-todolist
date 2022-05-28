<script>
  let count = 0;
  let count2 = 0;
  const increment = () => {
    count += 1;
  };

  function inc2() {
    count2 += 2;
  }
</script>

<section>
  <h3>{count2}</h3>

  <button on:click={inc2}> Click </button>
</section>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
