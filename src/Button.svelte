<script>
  import { getContext } from 'svelte';
  import { THEME_KEY } from './ThemeProvider.svelte';

  export let disabled = false;

  const theme = getContext(THEME_KEY) || {};
  const colors = theme.colors || {};
  const typography = theme.typography || {};
  const spacing = theme.spacing || {};
  const borderRadius = theme.borderRadius || '4px';

  $: background = disabled
    ? colors.disabledBackground || '#ccc'
    : colors.primary || '#000';

  $: textColor = colors.textOnPrimary || '#fff';
  $: padding = spacing.medium || '10px 20px';
  $: fontFamily = typography.fontFamily || 'sans-serif';
  $: fontSize = typography.fontSize || '14px';
</script>

<button
  disabled={disabled}
  style="
    background-color: {background};
    color: {textColor};
    font-family: {fontFamily};
    font-size: {fontSize};
    padding: {padding};
    border-radius: {borderRadius};
    border: none;
    cursor: {disabled ? 'not-allowed' : 'pointer'};
  "
>
  <slot />
</button>
