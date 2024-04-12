<script lang="ts">
  import type { PageData } from './$types';

  const isDebug = false;
  export let data: PageData;

  if(data && true) console.log("Page.svelte (setting/profile): OK");
  if(data && isDebug) console.log("Page.svelte (setting/profile).data:", data);
</script>

<h1>Profile</h1>