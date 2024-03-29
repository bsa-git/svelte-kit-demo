<script lang="ts">
  import { page } from "$app/stores";

  if($page.error) console.log('PageError:',  $page)
</script>

<!-- <h1>{$page.status}: {$page.error? $page.error.message}</h1> -->
<h1>Page Status: {$page.status}; PageError: "{$page.error?.message}" </h1>
