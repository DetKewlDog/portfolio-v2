<script lang='ts'>
	import type { Snippet } from "svelte";

	type ButtonOptions = {
		onclick: (event: MouseEvent) => void;
	} | {
		href: string;
	};

	let { children, class: className = '', ...rest } : {
		children: Snippet;
		class?: string;
	} & ButtonOptions = $props();


</script>

{#if 'onclick' in rest}
	<button class='btn {className}' onclick={rest.onclick}>
		<div class='btn-content'>
			{@render children()}
		</div>
	</button>
{:else}
	<a class='btn {className}' href={rest.href}>
		<div class='btn-content'>
			{@render children()}
		</div>
	</a>
{/if}

<style lang='postcss'>
	@property --gradient-angle {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0deg;
	}
	@property --gradient-angle-offset {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0deg;
	}
	@property --gradient-percent {
		syntax: '<percentage>';
		inherits: false;
		initial-value: 5%;
	}

	.btn {
		@apply isolate font-switzer font-medium text-white ease-in-out relative
			border border-solid border-transparent justify-center items-center inline-flex overflow-hidden;
		transition: all .8s cubic-bezier(.25, 1, .5, 1);
		box-shadow: inset 0 1px #ffffff0f, inset 0 -1px #0003;
		border-image:
			conic-gradient(
				from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
				transparent,
				#f97316 var(--gradient-percent),
				#faad28 calc(var(--gradient-percent) * 2),
				#f97316 calc(var(--gradient-percent) * 3),
				transparent calc(var(--gradient-percent) * 4)
			) 1;
	}

	.btn-content {
		@apply bg-[#100e0e4e] w-full h-full relative
			border border-solid border-[#f0f0f02e]
			flex justify-center items-center gap-[.55rem];
		padding: 1.1rem 2rem;
	}
	.btn-content::before {
		--size: 1.5rem;
		@apply content-[''] absolute -left-[calc(var(--size)/2)] -top-[calc(var(--size)/2)];
		transition: all .8s cubic-bezier(.25, 1, .5, 1);
		width: calc(100% + var(--size));
		height: calc(100% + var(--size));
	}

	.btn::before {
		@apply content-[''] absolute inset-0 w-full h-full p-[4px] !bg-clip-content bg-repeat;
		background-size: 4px 4px !important;
		background: radial-gradient(circle at 2px 2px, #faad28 .5px, transparent 0) padding-box;
		mask-image: conic-gradient(
			from calc(var(--gradient-angle) + 45deg),
			black,
			transparent 10% 90%,
			black
		);
	}

	.btn:after {
		@apply content-[''] -z-[1] absolute aspect-square animate-spin p-2 box-content;
    background: linear-gradient(-50deg, transparent, #f97316, transparent);
    opacity: .18;
    width: 100%;
    mask-image: radial-gradient(circle at bottom, #0000 40%, #000);
		animation-duration: 6s;
	}

	.btn, .btn::before {
		animation: gradient-angle linear infinite 6s;
		transition-property: --gradient-angle-offset, --gradient-percent;
		animation-composition: add;
	}

	.btn:hover {
		animation-play-state: running;
		--gradient-percent: 20%;
    --gradient-angle-offset: 95deg;
	}

	.btn:hover .btn-content::before {
		box-shadow: inset 0 -1ex 2rem 4px #faad2880;
	}

	@keyframes gradient-angle {
		from { --gradient-angle: 0deg; }
		to { --gradient-angle: 360deg; }
	}
</style>