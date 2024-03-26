<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>{data.title}</h1>

<div>{@html data.content}</div>

<br />
<!-- Back to blogs -->
<a href="/api">Back to API</a>
