<script lang="ts">
  import type { PageData } from './$types';

  const isDebug = false;
  export let data: PageData;

  if(data && true) console.log("Page.svelte (setting/cookies): OK");
  if(data && isDebug) console.log("Page.svelte (setting/cookies).data:", data);
</script>

<h2>Reading and writing cookies</h2>
<h3>Hello {data.visited ? 'friend' : 'stranger'}!</h3>