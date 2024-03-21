<script lang="ts">
	import type { ActionData } from "./$types";

	let a = 0;
	let b = 0;

	export let form: ActionData;

	if (form?.success) {
		a = form.a ? form.a : 0;
		b = form.b ? form.b : 0;
	}
</script>

<form method="POST">
	<label>
		Number1
		<input name="a" type="number" bind:value={a} />
	</label>
	<label>
		Number2
		<input name="b" type="number" bind:value={b} />
	</label>
	<button>Add</button>
</form>
{#if form?.success}
	<p>Total: {form?.total}</p>
{/if}
<!-- Back to API -->
<p><a href="/api">Back to API</a></p>
