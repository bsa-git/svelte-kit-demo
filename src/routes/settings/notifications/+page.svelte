<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  console.log(data.sections); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>

<h1>Notifications</h1>