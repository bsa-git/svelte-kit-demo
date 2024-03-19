<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  console.log("clientPage (Setting.Profile): OK", "data.sections:", data.sections); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>

<h1>Profile</h1>