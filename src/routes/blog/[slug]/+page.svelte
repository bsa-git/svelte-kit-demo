<script lang="ts">
  import type { PageData } from './$types';
  const isDebug = false;

  isDebug? console.log("Page.svelte (Blog/[slug]): OK") : '';

  export let data: PageData;
  // console.log('PageData:', data);
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>