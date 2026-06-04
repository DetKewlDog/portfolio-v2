<script lang='ts'>
	import { ProjectStatus, type ProjectEntry } from "$lib/types";
	import TimelineEntryBox from "./TimelineEntryBox.svelte";

  let { project }: { project: ProjectEntry } = $props();
</script>

<TimelineEntryBox entry={project}>
  {#snippet smallText()}
    {ProjectStatus[project.status]}
  {/snippet}
</TimelineEntryBox>