<script>
  import { setContext } from 'svelte';
  export let theme;
  export const THEME_KEY = {};
  setContext(THEME_KEY, theme);
</script>

<slot />
