<script lang='ts'>
	import LandingSection from "$lib/components/content/LandingSection.svelte";
	import SnapItem from "$lib/components/ui/SnapItem.svelte";
	import SnapList from "$lib/components/ui/SnapList.svelte";


</script>


<SnapList>
  <SnapItem>
    <LandingSection />
  </SnapItem>
  <SnapItem>
    <section id='about'>
      <p>Work in Progress</p>
    </section>
  </SnapItem>
  <SnapItem>
    <p>Soon™</p>
  </SnapItem>
</SnapList>


<style lang='postcss'>

</style>