<script lang="ts">
  import type { PageData } from './$types'
  import { page } from '$app/stores';

  const isDebug = true;
  if($page && isDebug) console.log("Page.svelte (Blog/[slug]): OK");
  if($page && isDebug) console.log("Page.svelte (Blog/[slug]).$page:", $page);

  export let data: PageData;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>