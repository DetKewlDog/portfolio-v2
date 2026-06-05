<script lang='ts'>
	import type { Snippet } from "svelte";

  let {
    class: className = '',
    children,
    onclick = () => {}
  } : {
    class?: string,
    children: Snippet,
    onclick?: () => void,
  } = $props();
</script>

<button class='box {className}' {onclick}>
  {@render children()}
</button>

<style lang='postcss'>
  .box {
    @apply relative flex flex-col justify-between bg-[#100e0e4e]
      border border-solid border-[#f0f0f02e]
      overflow-hidden transition-all duration-700 ease-out h-full
      hover:border-[#f97316] hover:bg-[#23160d]/50 text-left
      hover:shadow-[0_0_4px_rgba(249,115,22,0.18)] hover:-translate-y-2.5 p-3;
  }

	.box:before {
		@apply content-[''] pointer-events-none absolute inset-0;
		background: linear-gradient(#ffffff06 0%, #fff0 35%);
	}
</style>