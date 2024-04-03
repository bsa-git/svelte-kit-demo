<script lang="ts">
	import type { ActionData } from "./$types";

	const isDebug = false;

	let type: string|undefined = '';
	let path: string|undefined = '';

	export let form: ActionData;
	// Set values
	type = form?.type;
	path = form?.path;

	if(form && true) console.log('Page.form:', form);
</script>

<form method="POST">
	{#if form?.missing}<p class="error">ERROR: {form?.message}!</p>{/if}
	{#if form?.incorrect}<p class="error">ERROR: {form?.message}!</p>{/if}
	{#if form?.service_error}<p class="error">SERVICE ERROR: {form?.message}</p>{/if}
	<label>
		Type:
		<input name="type" type="text" bind:value={type} />
	</label>
	<label>
		Path:
		<input name="path" type="text" bind:value={path} />
	</label>
	<button formaction="?/openbrewerydb">OpenBreweryDB</button>
</form>
{#if form?.success}
	<p>Result: {form?.result}</p>
{/if}
<!-- Back to API -->
<p><a href="/api">Back to API</a></p>

<style lang="css">
	@import '../../styles.css';
  </style>
