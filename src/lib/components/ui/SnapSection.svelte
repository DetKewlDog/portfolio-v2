<script lang='ts'>
	import { onMount, type Snippet } from "svelte";

  let { children, id } : { children: Snippet, id: string } = $props();

  let isVisible = $state(false);
  let isMounted = $state(false);

  function viewport(node: HTMLElement) {
		const observer = new IntersectionObserver((entries) => {
			isVisible = entries[0].isIntersecting;
		});

		observer.observe(node);

		return {
			destroy() { observer.unobserve(node); }
		};
	}

  onMount(() => {
    isMounted = true;
  });
</script>

{#if isMounted}
  <section use:viewport class='section' id={id}>
    {#if isVisible}
      {@render children()}
    {/if}
  </section>
{/if}

<style lang='postcss'>
  .section {
    @apply snap-start snap-always text-white
      p-4 w-full h-svh flex justify-center
      items-center flex-[1_0_auto] relative;
  }
</style>