<script lang="ts">
  import { page, navigating } from "$app/stores";
  const isDebug = true;
  if (isDebug) console.log("Layout.svelte (Home): OK");
</script>

<nav>
  <a href="/" aria-current={$page.url.pathname === "/"}>Home</a>
  <a href="/about" aria-current={$page.url.pathname === "/about"}>About</a>
  <a href="/blog" aria-current={$page.url.pathname === "/blog"}>Blog</a>
  <a href="/api" aria-current={$page.url.pathname === "/api"}>API</a>
  <a href="/settings" aria-current={$page.url.pathname === "/settings"}>Settings</a>
</nav>

{#if $navigating}
  navigating to {$navigating?.to?.url.pathname}
{/if}

<slot>This is the main content</slot>
