<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Background from '$lib/components/ui/Background.svelte';

	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	import '../app.css';

	let { children } = $props();

	// onMount(() => {
	// 	const lenis = new Lenis({
	// 		autoRaf: true,
	// 		duration: 1.2,
	// 		smoothWheel: true
	// 	});

	// 	return () => {
	// 		lenis.destroy();
	// 	};
	// });
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Bar Goldenstein</title>
</svelte:head>

<Background darkBase fixed />

<main class='overflow-hidden'>
	{@render children()}
</main>

<Background blob grid vignette fixed />


<style lang='postcss'>
	:global(body) {
		@apply relative;
		background: radial-gradient(circle at center, #3d2f18, #0b0b0b 70%);
	}
</style>