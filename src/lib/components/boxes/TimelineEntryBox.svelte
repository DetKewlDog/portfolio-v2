<script lang="ts">
	import type { TimelineEntry } from "$lib/types";
	import { toDateString } from "$lib/utils";
	import type { Snippet } from "svelte";
	import ArrowRight from "../icons/ArrowRight.svelte";
	import Box from "../ui/Box.svelte";

  let { entry, smallText } : { entry: TimelineEntry, smallText: Snippet } = $props();

  function openEntry() {
    if (!entry.href) return;
    window.open(entry.href, '_blank');
  }
</script>

<Box class='box-entry w-full' onclick={openEntry}>
  {#if entry.image}
    <img src={entry.image} alt={entry.title} class='entry-img'>
  {:else}
    <div class='entry-img placeholder-img'>No Image Available</div>
  {/if}

  <div class='entry-content'>
    <div class='entry-labels'>
      <span class='entry-smalltext text-[#f97316]'>
        {entry.category}
      </span>

      <div class='flex gap-1.5'>
        {#each entry.tags as tag, index (index)}
          <span class='entry-tag'>
            {tag}
          </span>
        {/each}
      </div>
    </div>

    <h3 class='entry-title'>
      {entry.title}
      <div class='entry-accent'></div>
    </h3>

    <div class='entry-labels'>
      <span class='entry-smalltext text-white/50'>
        {toDateString(entry.startDate)} - {toDateString(entry.endDate) ?? 'Present'}
      </span>
      <span class='entry-smalltext text-white/50'>
        {@render smallText()}
      </span>
    </div>

    <p class='entry-description'>
      {entry.description}
    </p>

    {#if entry.href}
      <div class='entry-visit-site'>
        <span class='leading-[12px] text-[10.8px]' data-attr="Take Me There">
					Take Me There
				</span>
        <ArrowRight size={12} label={entry.title}
          class='duration-300 transition-all ease-in-out'
        />
      </div>
    {/if}
  </div>
</Box>

<style lang='postcss'>
  .entry-content {
    @apply flex flex-col w-full h-full py-3 gap-0.5;
  }

  .entry-labels {
    @apply flex items-center justify-between;
  }

  .entry-img {
    @apply w-full aspect-[16/9];
  }

  .placeholder-img {
    @apply bg-[#4a2b17]/20 text-center flex justify-center items-center
      font-firacode text-[#7C4827] text-lg;
  }

  .entry-smalltext {
    @apply font-firacode text-[9px] tracking-[0.25em] uppercase font-bold;
  }

  .entry-tag {
    @apply font-firacode text-[8px] uppercase tracking-widest bg-[#ffffff08]
      text-[#c8c7c2] px-2 py-0.5 border border-[#ffffff14] font-medium;
  }

  .entry-description {
    @apply text-[0.88rem] leading-relaxed font-light mt-2 mb-auto text-[#c8c7c2] font-switzer;
  }

  .entry-visit-site {
    @apply font-bold text-[10px] flex items-center gap-2 relative
      text-white mt-4 font-firacode tracking-[0.15em] px-4 py-1
      uppercase w-fit transition-all duration-300 ease-in-out
      after:w-[2px] after:h-full isolate;
  }

  .entry-visit-site::after {
    @apply content-[''] absolute inset-0 origin-bottom-left
      transition-all duration-300 ease-in-out;
    background: linear-gradient(90deg, #f97316, #faad28, #f97316);
    background-size: 200% 200%;
    animation: anim-gradient 2s linear infinite forwards;
		mix-blend-mode:difference;
  }

  :global(.box-entry:hover .entry-visit-site) {
    @apply [&_div]:border-white/50 after:w-full gap-3 !text-[#f97316];
  }

  .entry-title {
    @apply text-xl md:text-2xl font-bold tracking-tight font-sans mb-1 -mt-1 w-fit font-switzer;
  }

  .entry-accent {
    @apply h-[2px] w-full scale-x-0
      transition-all duration-300 ease-in-out origin-left;
    background: linear-gradient(90deg, #f97316, #faad28, #f97316);
    background-size: 200% 200%;
    animation: anim-gradient 2s linear infinite forwards;
  }

  :global(.box-entry:hover .entry-accent) {
    @apply scale-x-100;
  }


  @keyframes anim-gradient {
    0% { background-position: 0 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 200% 50%; }
  }
</style>