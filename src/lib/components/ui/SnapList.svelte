<script lang='ts'>
  let { children } = $props();
</script>

<div class='snap-list'>
  {@render children()}
</div>

<style lang='postcss'>
  .snap-list {
    @apply flex flex-col scroll-smooth gap-8;
  }
</style>