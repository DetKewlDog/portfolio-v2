<script lang='ts'>
	import SnapSection from "$lib/components/ui/SnapSection.svelte";
	import SnapList from "$lib/components/ui/SnapList.svelte";
	import Background from "$lib/components/ui/Background.svelte";

	import LandingSection from "$lib/components/content/LandingSection.svelte";
	import ProjectsSection from "$lib/components/content/ProjectsSection.svelte";
	import TimelineSection from "$lib/components/content/TimelineSection.svelte";

</script>


<SnapList>
  <SnapSection id='landing'>
		<Background background />
    <LandingSection />
  </SnapSection>
  <SnapSection id='about'>
    <ProjectsSection />
  </SnapSection>
  <!-- <SnapSection id='timeline'>
    <TimelineSection />
  </SnapSection> -->
</SnapList>


<style lang='postcss'>

</style>