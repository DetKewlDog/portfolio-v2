<script lang='ts'>
  let { children } = $props();
</script>

<div class='snap-list'>
  {@render children()}
</div>

<style lang='postcss'>
  .snap-list {
    @apply snap-y snap-mandatory overflow-y-scroll h-svh flex flex-col scroll-smooth;
  }
</style>