<script lang="ts">
    import type { LayoutData } from "./$types";
  
    console.log("clientLayout (Blog): OK");
  
    export let data: LayoutData;
  </script>
  
  <h1>Blog</h1>
  
  <div class="submenu">
    <ul>
      {#each data.posts as post}
        <li><a href="/blog/{post.slug}">{post.slug}</a></li>
      {/each}
    </ul>
  </div>
  <slot />