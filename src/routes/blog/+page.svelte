<script lang="ts">
  import type { PageData } from './$types'
  import { page } from '$app/stores';
  
  const isDebug = true;

  if($page && isDebug) console.log("Page.svelte (Blog): OK");
  if($page && isDebug) console.log("Page.svelte (Blog).$page:", $page);

  export let data: PageData;
</script>

<h1>Blog</h1>
{#if data.summaries}
<ul>
  {#each data.summaries as { slug, title }}
    <li><a href="/blog/{slug}">{title}</a></li>
  {/each}
</ul>
{/if}

