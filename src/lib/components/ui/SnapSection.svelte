<script lang='ts'>
	import { onMount, type Snippet } from "svelte";
	import Reveal from "./Reveal.svelte";

  let { children, id } : { children: Snippet, id: string } = $props();

  let isMounted = $state(false);

  onMount(() => {
    isMounted = true;
  });
</script>

{#if isMounted}
  <section class='section' id={id}>
		<Reveal once>
			{@render children()}
		</Reveal>
  </section>
{/if}

<style lang='postcss'>
  .section {
    @apply text-white
      w-full min-h-svh flex justify-center
      items-center flex-[1_0_auto] relative;
  }
</style>