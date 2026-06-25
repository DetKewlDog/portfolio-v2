<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let {
		once = false,
		top = 0,
		bottom = 0,
		children,
		class: className = ''
	}: {
		once?: boolean;
		top?: number;
		bottom?: number;
		children: Snippet;
		class?: string;
	} = $props();

	let element: HTMLElement;
	let inView = $state<boolean>(false);

	onMount(() => {
		const rootMargin = `${-bottom}px 0px ${-top}px 0px`;

		const observer = new IntersectionObserver(
			([entry]) => {
				inView = entry.isIntersecting;

				if (entry.isIntersecting && once) {
					observer.unobserve(element);
				}
			}, 
			{ rootMargin }
		);

		observer.observe(element);
		return () => observer.disconnect();
	});
</script>

<div bind:this={element} class={className}>
	{#if inView}
		{@render children()}
	{/if}
</div>