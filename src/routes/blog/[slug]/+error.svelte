<script lang="ts">
  import { page } from "$app/stores";

  if ($page.error) console.log("PageError:", $page);
</script>

<h1>Error Page for "/blog/[slug]" path</h1>

<h3 class="error">
  Page Status: {$page.status}; PageError: "{$page.error?.message}"
</h3>

