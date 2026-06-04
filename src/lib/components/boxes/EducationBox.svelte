<script lang='ts'>
	import { type EducationEntry } from "$lib/types";
	import TimelineEntryBox from "./TimelineEntryBox.svelte";

  let { education }: { education: EducationEntry } = $props();
</script>

<TimelineEntryBox entry={education}>
  {#snippet smallText()}
    {education.field}
  {/snippet}
</TimelineEntryBox>