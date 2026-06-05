<script lang="ts">
	let { darkBase, background, blob, grid, vignette, fixed } : {
		darkBase?: boolean,
		background?: boolean,
		blob?: boolean,
		grid?: boolean,
		vignette?: boolean,
		fixed?: boolean
	} = $props();
</script>


<div class='background-container' style={fixed ? 'position: fixed' : ''}>
	{#if darkBase}
		<div class='dark-base'></div>
	{/if}

	{#if background}
		<div class='background'></div>
	{/if}

	{#if blob}
		<div class='blob'></div>
	{/if}

	{#if grid}
		<div class='grid'></div>
	{/if}

	{#if vignette}
		<div class='vignette'></div>
	{/if}
</div>


<style lang='postcss'>
	.background-container {
		@apply absolute inset-0 pointer-events-none -z-10 overflow-hidden min-h-svh max-h-svh;
	}

	.dark-base {
		@apply w-full h-full absolute inset-0;
		background: radial-gradient(circle at center, #3d2f18, #0b0b0b 70%);
	}

	.background {
		@apply min-h-svh h-full inset-0 absolute
			overflow-hidden mix-blend-screen bg-cover;
		background-position: 50% 20% !important;
		animation: anim-bg-zoomin 1.4s cubic-bezier(.61,.29,.02,1) forwards;
		background: url('/background_forest.png');
		mask-image: linear-gradient(
			to bottom,
			rgba(0,0,0,0.1),
			rgba(0,0,0,1) 20%,
			rgba(0,0,0,1) 60%,
			rgba(0,0,0,0)
		);
	}

	@keyframes anim-bg-zoomin {
		from { opacity: 0%; transform: scale(1.25); }
		to { opacity: 100%; transform: scale(1); }
	}

	.blob {
		@apply absolute -left-[calc(12.5svh)] top-[calc(6.25svh)]
			max-lg:h-1/3 h-1/2 aspect-square rounded-full blur-[200px];
		animation: breathing 2s ease-in-out infinite alternate;
		background: radial-gradient(circle at center, #ffc163, #ff8f20 60%, #ff5500);
	}

	.grid {
		@apply absolute inset-0 bg-[length:24px_22px] bg-repeat
			bg-center select-none bg-[url('/grid_cross.png')]
			opacity-[3%] p-4 bg-clip-content;
	}

	.vignette {
		@apply w-full h-full min-h-svh absolute inset-0 opacity-30;
		background: radial-gradient(ellipse at center, #00000070 35%, #000000);
	}

	@keyframes breathing {
		from { opacity: 0.6; transform: scale(0.95); }
		to { opacity: 0.8; transform: scale(1.05); }
	}
</style>