<script lang="ts">
    import type { LayoutData } from "./$types";
  
    console.log("clientLayout (Docs): OK");
  
    export let data: LayoutData;
  </script>
  
  <h1>Blog</h1>
  
  <div class="submenu">
    <ul>
      {#each data.docs as doc}
        <li><a href="/docs/{doc.branch}/{doc.path}">{doc.branch + '.' + doc.path}</a></li>
      {/each}
    </ul>
  </div>
  <slot />