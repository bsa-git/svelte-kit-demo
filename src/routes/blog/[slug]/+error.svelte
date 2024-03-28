<script lang="ts">
  import { page } from "$app/stores";

  if($page.error) console.log('Page:',  $page)
</script>

<!-- <h1>{$page.status}: {$page.error? $page.error.message}</h1> -->
<h1>Page Status: {$page.status}; Page Error: "{$page.error?.message}" </h1>
