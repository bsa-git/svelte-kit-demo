<script lang="ts">
  import type { LayoutData } from "./$types";

  const isDebug = false;
  if(true) console.log("Layout.svelte (Settings): OK");

  export let data: LayoutData;

</script>

<h1>Settings</h1>

<div class="submenu">
  <ul>
    {#each data.sections as section}
      <li><a href="/settings/{section.slug}">{section.title}</a></li>
    {/each}
  </ul>
</div>
<slot></slot>
