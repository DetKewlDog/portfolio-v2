<script lang='ts' module>
  export type IconProps = {
    color?: string;
    hoverColor?: string;
    href?: string;
    size?: number;
  };
</script>

<script lang='ts'>
  import type { Snippet } from 'svelte';

  let {
    color = 'white',
    hoverColor = '#f97316',
    size = 32,
    href,
    children
  } : IconProps & { children: Snippet<[]> } = $props();
</script>


{#snippet Svg()}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={size} fill='currentColor' class='max-lg:scale-75'>
    {@render children()}
  </svg>
{/snippet}


<div style="--col: {color}; --hov-col: {hoverColor};" class='icon'>
  {#if href}
    <a {href} aria-label='mail' target='_blank' rel='external'>
      {@render Svg()}
    </a>
  {:else}
    {@render Svg()}
  {/if}
</div>


<style lang='postcss'>
  .icon {
    @apply text-[var(--col)] transition-all duration-300;
  }

  .icon > a {
    @apply hover:text-[var(--hov-col)] transition-all duration-300;
  }
</style>