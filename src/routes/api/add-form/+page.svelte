<script lang="ts">
	let a = 0;
	let b = 0;
	let total = 0;
	
	async function add() {
		const response = await fetch('/api/add-form', {
			method: 'POST',
			body: JSON.stringify({ a, b }),
			headers: {
				'content-type': 'application/json',
			},
		});
	
		total = await response.json();
	}
</script>

<input type="number" bind:value={a}> +
<input type="number" bind:value={b}> =
{total}

<button on:click={add}>Calculate</button>

<!-- Back to API -->
<p><a href="/api">Back to API</a></p>