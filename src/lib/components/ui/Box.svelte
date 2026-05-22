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
    @apply relative flex flex-col justify-between bg-[#23160d]/30
      backdrop-blur-md border border-[#4a2b17]/40 rounded-[32px]
      overflow-hidden transition-all duration-700 ease-out h-full
      hover:border-[#f97316] hover:bg-[#23160d]/50 text-left
      hover:shadow-[0_0_4px_rgba(249,115,22,0.18)] hover:-translate-y-2.5 p-3;
  }
</style>