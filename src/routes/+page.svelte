<script lang='ts'>
	import FeaturedProjects from "$lib/components/content/FeaturedProjects.svelte";
	import LandingSection from "$lib/components/content/LandingSection.svelte";
	import SnapSection from "$lib/components/ui/SnapSection.svelte";
	import SnapList from "$lib/components/ui/SnapList.svelte";
	import TreeSection from "$lib/components/content/TreeSection.svelte";
	import Background from "$lib/components/ui/Background.svelte";


</script>


<SnapList>
  <SnapSection id='landing'>
		<Background background />
    <LandingSection />
  </SnapSection>
  <SnapSection id='about'>
    <FeaturedProjects />
  </SnapSection>
  <SnapSection id='timeline'>
    <TreeSection />
  </SnapSection>
</SnapList>


<style lang='postcss'>

</style>