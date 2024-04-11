<script lang="ts">
	import type { ActionData } from "./$types";

	const isDebug = false;

	let type: string|undefined = '';
	let path: string|undefined = '';

	export let form: ActionData;
	// Set values
	type = form?.type;
	path = form?.path;

	if(form && isDebug) console.log('Page.form:', form);
</script>

<h2>HTML Table for (OpenBreweryDB fake data)</h2>

<table >
  <tr>
    <th>TITLE</th>
    <th>TYPE</th>
    <th>PATH</th>
  </tr>
  <tr>
    <td>01. Get a single brewery</td>
    <td>single</td>
    <td>b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0</td>
  </tr>
  <tr>
    <td>02. Returns a list of breweries</td>
    <td>list</td>
    <td>per_page/5</td>
  </tr>
  <tr>
    <td>03. Filter breweries by city</td>
    <td>list</td>
    <td>by_city/san_diego/per_page/3</td>
  </tr>
  <tr>
    <td>04. Get a random brewery</td>
    <td>random</td>
    <td></td>
  </tr>
  <tr>
    <td>05. Number of breweries to return each call</td>
    <td>random</td>
    <td>size/3</td>
  </tr>
  <tr>
    <td>06. Search for breweries based on a search term</td>
    <td>search</td>
    <td>query/san%20diego/per_page/3</td>
  </tr>
  <tr>
    <td>07. Return a list of names and ids of breweries based on a search term</td>
    <td>autocomplete</td>
    <td>query/san%20diego</td>
  </tr>
  <tr>
    <td>08. Show all breweries meta data</td>
    <td>meta</td>
    <td></td>
  </tr>
  <tr>
    <td>09. Show South Korean breweries meta data</td>
    <td>meta</td>
    <td>by_country/south_korea</td>
  </tr>
  <tr>
    <td>10. Show micro breweries meta data</td>
    <td>meta</td>
    <td>by_type/micro</td>
  </tr>
</table>

<br/><br/>

<h2>Form for receiving fake data</h2>

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


<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  /* tr:nth-child(even) {
    background-color: #dddddd;
  } */
</style>
