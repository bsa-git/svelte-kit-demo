<script lang="ts">
	/** @type {number} */
	let number: Number;

	async function roll() {
		const response = await fetch('/api/server-handlers/get-handler/roll');
		number = await response.json();
	}
</script>

<button on:click={roll}>Roll the dice</button>

{#if number !== undefined}
	<p>You rolled a {number}</p>
{/if}