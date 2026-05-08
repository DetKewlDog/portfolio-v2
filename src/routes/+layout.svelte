<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Bar Goldenstein</title>
</svelte:head>


<div class='background'>
	<div class='blob'></div>
	<div class="grid"></div>

	<main>
		{@render children()}
	</main>
</div>


<style lang='postcss'>
	:global(body) {
		background: radial-gradient(circle at center, #1a120a, #0d0d0d 70%);
	}

	.background {
		@apply min-h-svh relative overflow-hidden;
	}

	.blob {
		@apply pointer-events-none absolute -left-[calc(12.5svh)] top-[calc(6.25svh)]
			max-lg:h-1/3 h-1/2 aspect-square rounded-full blur-[200px];
		animation: breathing 2s ease-in-out infinite alternate;
		background: radial-gradient(circle at center, #ff9a3c, #ff6a00 60%, #ff3c00);
	}

	.grid {
		@apply fixed inset-0 bg-[length:26px_24px] bg-repeat
			bg-center pointer-events-none select-none
			bg-[url('/grid_cross.png')] opacity-[1%];
	}

	@keyframes breathing {
		from { opacity: 0.3; transform: scale(0.95); }
		to { opacity: 0.5; transform: scale(1.05); }
	}
</style>