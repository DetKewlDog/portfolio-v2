<script lang='ts'>
	import { type EmploymentEntry } from "$lib/types";
	import TimelineEntryBox from "./TimelineEntryBox.svelte";

  let { employment }: { employment: EmploymentEntry } = $props();
</script>

<TimelineEntryBox entry={employment}>
  {#snippet smallText()}
    {employment.employmentType}
  {/snippet}
</TimelineEntryBox>