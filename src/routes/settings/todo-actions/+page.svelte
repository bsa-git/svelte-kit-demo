<script lang="ts">
  import { fly, slide } from 'svelte/transition';
  import { enhance } from '$app/forms';
  import type { PageData, ActionData } from "./$types";

  const isDebug = false;
  export let data: PageData;
  export let form: ActionData;

  if (data && true) console.log("Page.svelte (setting/todo-actions): OK");
  if (data && isDebug) console.log("Page.svelte (setting/todo-actions).data:", data);
</script>

<div class="centered">
  <h1>ToDos-Actions</h1>

  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}

  <form method="POST" action="?/create" use:enhance>
    <label>
      Add a ToDo:
      <input
        name="description"
        value={form?.description ?? ""}
        autocomplete="off"
        required
      />
    </label>
  </form>

  <ul class="todos">
    {#each data.todos as todo (todo.id)}
      <li in:fly={{ y: 20 }} out:slide>
        <form method="POST" action="?/delete" use:enhance>
          <input type="hidden" name="id" value={todo.id} />
          <span>{todo.description}</span>
          <button aria-label="Mark as complete" />
        </form>
      </li>
    {/each}
  </ul>
</div>

<style>
  .centered {
    max-width: 50em;
    margin: 0 auto;
  }

  label {
    width: 100%;
  }

  input {
    flex: 1;
  }

  span {
    flex: 1;
  }

  button {
    border: none;
    background: url(./remove.svg) no-repeat 50% 50%;
    background-size: 1rem 1rem;
    cursor: pointer;
    height: 100%;
    aspect-ratio: 1;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 1;
  }
</style>
