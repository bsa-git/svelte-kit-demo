<script lang="ts">
  type Post = {
    slug: string;
    title: string;
    content?: string;
  };

  type Summaries = {
    summaries: Post[];
  };
  
  export let data: Summaries;
</script>

<h1>blog</h1>

<ul>
  {#each data.summaries as { slug, title }}
    <li><a href="/blog/{slug}">{title}</a></li>
  {/each}
</ul>
