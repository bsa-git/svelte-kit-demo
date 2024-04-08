<script lang="ts">
  import type { Summaries } from "./blog";
  const isDebug = false;

  isDebug? console.log("Page.svelte (Blog): OK") : '';
    
  export let data: Summaries;
</script>

<h1>Blog</h1>
{#if data.summaries}
<ul>
  {#each data.summaries as { slug, title }}
    <li><a href="/blog/{slug}">{title}</a></li>
  {/each}
</ul>
{/if}

