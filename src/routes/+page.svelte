<script lang='ts'>
	import FeaturedProjects from "$lib/components/content/FeaturedProjects.svelte";
	import LandingSection from "$lib/components/content/LandingSection.svelte";
	import SnapSection from "$lib/components/ui/SnapSection.svelte";
	import SnapList from "$lib/components/ui/SnapList.svelte";


</script>


<SnapList>
  <SnapSection id='landing'>
    <LandingSection />
  </SnapSection>
  <SnapSection id='about'>
    <FeaturedProjects />
  </SnapSection>
  <SnapSection id='timeline'>
    <p>Soon™</p>
  </SnapSection>
</SnapList>


<style lang='postcss'>

</style>