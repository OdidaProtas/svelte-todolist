<script>
  import { todosAPI } from "../store/store";
  import { fly, fade } from "svelte/transition";
  let state;

  import { formActive } from "../store/store";
  import { fetchTodos } from "../api/todos.api";

  async function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("todos", JSON.stringify($todosAPI.then((v) => v)));
    todosAPI.set(fetchTodos(100));
    state = { ...{} };
    formActive.set(false);
  }

  function handleChange(e) {
    state = { ...state, [e.target.name]: e.target.value };
  }

  function deleteItem(idx) {
    const isDel = confirm("Do you want to delete this item?");
    if (isDel) {
      const all = JSON.parse(localStorage.getItem("todos") ?? "[]");
      all.splice(idx, 1);
      localStorage.setItem("todos", JSON.stringify([...all]));
      todosAPI.set( fetchTodos(100));
    }
  }

  const fields = [
    { name: "title", placeholder: "Enter title", type: "text", required: true },
    { name: "desc", placeholder: "Enter desc", type: "text", required: true },
  ];
</script>

<section transition:fade>
  {#if !Boolean($formActive)}
    <div transition:fade class="grid-container">
      {#await $todosAPI}
        loading
      {:then todoos}
        {#each todoos as todo, idx}
          <div
            class="grid-item-2"
            in:fly={{
              [["x", "y"][Math.floor(Math.random() * 2)]]: Math.floor(
                Math.random() * 100
              ),
              duration: Math.floor(Math.random() * 1000),
            }}
            out:fly={{
              [["x", "y"][Math.floor(Math.random() * 2)]]: Math.floor(
                Math.random() * 100
              ),
              duration: Math.floor(Math.random() * 1100),
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <hr />
            <button>Complete</button>
            <button on:click={() => deleteItem(idx)}>Delete</button>
          </div>
        {/each}
      {:catch err}
        <h4>
          {err.message}
        </h4>
      {/await}
    </div>
  {/if}

  {#if $formActive}
    <form
      in:fly={{ y: 500, duration: 200 }}
      out:fly={{ y: 500, duration: 200 }}
      on:submit={handleSubmit}
    >
      {#each fields as field}
        <input
          in:fly={{
            [["x", "y"][Math.floor(Math.random() * 2)]]: Math.floor(
              Math.random() * 1000
            ),
            duration: Math.floor(Math.random() * 1000),
          }}
          out:fly={{
            [["x", "y"][Math.floor(Math.random() * 2)]]: Math.floor(
              Math.random() * 1000
            ),
            duration: Math.floor(Math.random() * 1100),
          }}
          on:change={handleChange}
          required={field.required}
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
        />
        <br />
      {/each}
      <br />
      <button type="submit">Submit</button>
    </form>
  {/if}
</section>

<style>
  input {
    min-height: 50px;
    min-width: 400px;
    margin: 10px;
    border-radius: 4px;
  }
  button {
    height: 36px;
    width: 90%;
    background: #f07662;
    border-radius: 4px;
    margin: 4px;
    font-size: 18px;
  }

  .grid-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 36px;
  }

  .grid-item-2 {
    box-sizing: border-box;
    flex-grow: 1;
    max-width: 48%;
    flex-basis: 50%;
    border: 1px solid gray;
    margin: 4px;
    border-radius: 4px;
    padding-bottom: 20px;
  }
</style>
