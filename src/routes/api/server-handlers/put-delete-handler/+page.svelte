<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  const isDebug = false;
  if (data && true)
    console.log("Page.svelte (api/server-handlers/put-delete-handler): OK");
  if (data && isDebug)
    console.log(
      "Page.svelte (api/server-handlers/put-delete-handler).data:",
      data
    );

  const onAddTodo = async (e: any) => {
    if (e.key !== "Enter") return;

    const input = e.currentTarget;
    const description = input.value;

    const response = await fetch(
      "/api/server-handlers/put-delete-handler/todo",
      {
        method: "POST",
        body: JSON.stringify({ description }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { id } = await response.json();

    data.todos = [
      ...data.todos,
      {
        id,
        description,
      },
    ];

    input.value = "";
  };
</script>

<div class="centered">
  <h1>todos</h1>

  <label>
    add a todo:
    <input type="text" autocomplete="off" on:keydown={onAddTodo} />
  </label>

  <ul class="todos">
    {#each data.todos as todo (todo.id)}
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            on:change={async (e) => {
              const done = e.currentTarget.checked;
              await fetch(
                `/api/server-handlers/put-delete-handler/todo/${todo.id}`,
                {
                  method: "PUT",
                  body: JSON.stringify({ done }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            }}
          />
          <span>{todo.description}</span>
          <button
            aria-label="Mark as complete"
            on:click={async (e) => {
              await fetch(
                `/api/server-handlers/put-delete-handler/todo/${todo.id}`,
                {
                  method: "DELETE",
                }
              );

              data.todos = data.todos.filter((t) => t !== todo);
            }}
          />
        </label>
      </li>
    {/each}
  </ul>
</div>

<style>
  .centered {
    max-width: 20em;
    margin: 0 auto;
  }

  label {
    display: flex;
    width: 100%;
  }

  input[type="text"] {
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
