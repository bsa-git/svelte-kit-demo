<script lang="ts">
  const isDebug = true;
  if(isDebug) console.log("Layout.svelte (Home): OK");
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/blog">Blog</a>
  <a href="/api">API</a>
  <a href="/settings">Settings</a>
</nav>

<slot>This is the main content</slot>