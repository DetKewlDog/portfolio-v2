<script lang='ts'>
	import type { Snippet } from "svelte";
	import Button from "./Button.svelte";

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

<Button
	class='h-full hover:shadow-[0_0_4px_rgba(249,115,22,0.18)] hover:-translate-y-2.5 {className}'
	{onclick} spin={false}
>
	<div class='flex flex-col justify-between text-left'>
		{@render children()}
	</div>
</Button>

<style lang='postcss'>

</style>