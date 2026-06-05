<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Background from '$lib/components/ui/Background.svelte';

	import { onMount } from 'svelte';
	import Lenis from 'lenis';

	import '../app.css';

	let { children } = $props();

	onMount(() => {
		const lenis = new Lenis();

		let frame: number;

		function raf(time: number) {
			lenis.raf(time);
			frame = requestAnimationFrame(raf);
		}

		frame = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(frame);
			lenis.destroy();
		};
	});
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

</style>