<script lang="ts">
	import { ProjectStatus, type ProjectEntry } from "$lib/types";
	import { toDateString } from "$lib/utils";
	import ArrowRight from "../icons/ArrowRight.svelte";
	import Box from "../ui/Box.svelte";

  let { project } : { project: ProjectEntry } = $props();

  function openProject() {
    if (!project.href) return;
    window.open(project.href, '_blank');
  }
</script>

<Box class='box-project w-full' onclick={openProject}>
  {#if project.image}
    <img src={project.image} alt={project.title} class='project-img'>
  {:else}
    <div class='project-img placeholder-img'>No Image Available</div>
  {/if}

  <div class='project-content'>
    <div class='project-labels'>
      <span class='project-smalltext text-[#f97316]'>
        {project.category}
      </span>

      <div class='flex gap-1.5'>
        {#each project.tags as tag, index (index)}
          <span class='project-tag'>
            {tag}
          </span>
        {/each}
      </div>
    </div>

    <h3 class='project-title'>
      {project.title}
      <div class='project-divider'></div>
    </h3>

    <div class='project-labels'>
      <span class='project-smalltext text-white/50'>
        {toDateString(project.startDate)} - {toDateString(project.endDate) ?? 'Present'}
      </span>
      <span class='project-smalltext text-white/50'>
        {ProjectStatus[project.status]}
      </span>
    </div>

    <p class='project-description'>
      {project.description}
    </p>

    {#if project.href}
      <div class='project-visit-site'>
        <span class='leading-[12px] text-[10.8px]'>Take Me There</span>
        <ArrowRight size={12} label={project.title}
          class='rounded-full border-[2px] border-white/20 duration-300 transition-all ease-in-out'
        />
      </div>
    {/if}
  </div>
</Box>

<style lang='postcss'>
  .project-content {
    @apply flex flex-col w-full h-full py-3 gap-0.5;
  }

  .project-labels {
    @apply flex items-center justify-between;
  }

  .project-img {
    @apply rounded-3xl w-full aspect-[16/9];
  }

  .placeholder-img {
    @apply bg-[#4a2b17]/20 text-center flex justify-center items-center
      font-firacode text-[#7C4827] text-lg;
  }

  .project-smalltext {
    @apply font-firacode text-[9px] tracking-[0.25em] uppercase font-bold;
  }

  .project-tag {
    @apply font-firacode text-[8px] uppercase tracking-widest bg-[#292929]/45
      text-[#ddd]/90 px-2 py-0.5 rounded border border-[#292929]/65 font-medium;
  }

  .project-description {
    @apply text-[0.88rem] leading-relaxed font-light mt-2 mb-auto;
  }

  .project-visit-site {
    @apply font-bold text-[10px] flex items-center gap-2 relative
      text-white mt-4 font-firacode tracking-[0.15em] px-4 py-1
      uppercase w-fit transition-colors duration-300 ease-in-out
      after:h-[2px] after:w-full after:scale-x-0 after:mt-auto
      before:w-[2px] before:h-full;
  }

  .project-visit-site::before, .project-visit-site::after {
    @apply content-[''] absolute inset-0 -z-10 origin-bottom-left
      transition-all duration-300 ease-in-out;
    background: linear-gradient(90deg, #f97316, #faad28, #f97316);
    background-size: 200% 200%;
    animation: anim-gradient 2s linear infinite forwards;
  }

  :global(.box-project:hover .project-visit-site) {
    @apply [&_div]:border-white/50 before:scale-y-0 after:scale-100;
  }

  .project-title {
    @apply text-xl md:text-2xl font-bold tracking-tight font-sans mb-1 -mt-1 w-fit;
  }

  .project-divider {
    @apply h-[2px] w-full scale-x-0
      transition-all duration-300 ease-in-out origin-left;
    background: linear-gradient(90deg, #f97316, #faad28, #f97316);
    background-size: 200% 200%;
    animation: anim-gradient 2s linear infinite forwards;
  }

  :global(.box-project:hover .project-divider) {
    @apply scale-x-100;
  }


  @keyframes anim-gradient {
    0% { background-position: 0 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 200% 50%; }
  }
</style>