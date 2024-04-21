<script lang="ts">
	import type { PageData } from './$types';

const isDebug = false;
export let data: PageData;

if(data && true) console.log("Page.svelte (setting/todo-list): OK");
if(data && isDebug) console.log("Page.svelte (setting/todo-list).data:", data);
</script>

<div class="centered">
	<h1>ToDos-List</h1>

  <form method="POST">
		<label>
			Add a ToDo:
			<input
				name="description"
				autocomplete="off"
			/>
		</label>
	</form>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				{todo.description}
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
</style>