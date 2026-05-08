<script lang='ts' module>
  export type IconProps = {
    href?: string;
    size?: number;
    label: string;
    class?: string;
  };
</script>

<script lang='ts'>
  import type { Snippet } from 'svelte';

  let {
    size = 32,
    href,
    label,
    class: className = '',
    children
  } : IconProps & { children: Snippet<[]> } = $props();
</script>


{#snippet Svg()}
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 640 640' width={size}
    fill='currentColor'
    class='max-lg:scale-75'
  >
    {@render children()}
  </svg>
{/snippet}


{#if href}
  <a {href} target='_blank' rel='external' aria-label={label} class={className}>
    {@render Svg()}
  </a>
{:else}
  <div class={className}>
    {@render Svg()}
  </div>
{/if}