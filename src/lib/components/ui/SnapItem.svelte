<script lang='ts'>
  let { children } = $props();
</script>

<div class='section'>
  {@render children()}
</div>

<style lang='postcss'>
  .section {
    @apply snap-start snap-always text-white
      p-4 w-full h-screen flex justify-center
      items-center flex-[1_0_auto];
  }
</style>