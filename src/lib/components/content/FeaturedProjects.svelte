<script lang='ts'>
	import { newTypewriter } from "$lib/stores/typewriter";
	import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { fly, type FlyParams } from "svelte/transition";

	import { projects } from "$lib/consts";
	import ProjectBox from "./ProjectBox.svelte";
	import ChevronDown from "../icons/ChevronDown.svelte";

  let mounted = $state(false);
  let startBlinking = $state<boolean>(false);
  let showOnlyFeatured = $state<boolean>(true);

  onMount(() => {
    mounted = true;
  });

  const flyTransitionTitle: FlyParams = {
    delay: 200, duration: 600, easing: cubicInOut, y: 35
  };
  const flyTransitionTop: FlyParams = {
    delay: 400, duration: 600, easing: cubicInOut, y: 35
  };

  let [typewriter, isTyping] = newTypewriter({
    prefix: '~/featured-projects ❯ ',
    options: [
      '',
      'ls projects/',
      'npm run build portfolio/',
      'find . -type f -name "*.ts"',
      'grep -r "interesting" .',
      'rm -rf bugs/'
    ],
    typeInterval: 35,
    typeCooldown: 3000
  });

  let shownProjects = $derived(
    projects
    .filter(project => !showOnlyFeatured || project.featured)
    .toSorted((a, b) =>
      a.featured && b.featured
      ? +!!b.href - +!!a.href
      : +!!b.featured - +!!a.featured
    )
  );
</script>

{#if mounted}
<div class='about-section'>
  <div class='about-title' transition:fly={flyTransitionTitle}>
    <p
      class='mono-text opacity-50 typewriter cursor'
      class:blink={!$isTyping && startBlinking}
      transition:fly={flyTransitionTop}
      onintrostart={() => startBlinking = true}
    >
      {$typewriter}
    </p>

    <p class='name'>Featured Projects</p>
  </div>

  <div class='projects'>
    {#each shownProjects as project, index (index)}
      <div in:fly|global={{
        delay: 400 + index * 100, duration: 400, easing: cubicInOut, y: 35
      }}>
        <ProjectBox {project} />
      </div>
    {/each}

    <button class='mono-text show-more' onclick={() => showOnlyFeatured = !showOnlyFeatured}>
      <p class='show-more-text'>
        {showOnlyFeatured ? 'Show More' : 'Show Less'}
      </p>

      <ChevronDown size={16} label={showOnlyFeatured ? 'Show More' : 'Show Less'} class='transition-all duration-300 ease-in-out {showOnlyFeatured ? '' : 'rotate-180'}' />
    </button>
  </div>
</div>
{/if}

<style lang='postcss'>
  .about-section {
    @apply w-full flex flex-col my-auto h-svh
      max-md:py-2 max-lg:py-4 py-6
      max-md:px-0 max-lg:px-12 px-32;
  }

  .about-title p {
    @apply whitespace-nowrap text-nowrap drop-shadow-lg
      transition-all duration-300 ease-in-out px-3;
  }

  .name {
    @apply font-title font-bold pb-4
      max-md:text-3xl max-lg:text-4xl text-6xl
      !bg-clip-text text-transparent relative z-20
      transition-all duration-300 ease-in-out;
    background: linear-gradient(90deg, #f97316, #faad28, #f97316);
    background-size: 200% 200%;
    animation: anim-gradient 2s linear infinite forwards;
  }

  .mono-text {
    @apply font-firacode font-semibold relative z-10 w-fit;
    text-shadow: 4px 4px 4px #00000080;
  }

  .typewriter {
    @apply max-md:leading-[13.33px] max-md:text-[10px] max-lg:text-xs text-base;
  }

  .projects {
    @apply grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-8
      w-full h-full overflow-y-scroll p-3 !scroll-smooth transition-all duration-300;
  }

  .cursor:after {
    @apply absolute content-['']
      max-md:h-[10px] max-md:w-[3.75px] max-md:m-[1.25px]
      max-lg:h-3 max-lg:w-1 max-lg:m-[1.5px]
      h-4 w-1.5 m-1 bg-white;
    box-shadow: 4px 4px 4px #00000080;
  }
  .cursor.blink:after {
    animation: anim-blink .8s infinite;
  }

  .show-more:hover {
    filter: drop-shadow(0 0 2px #f9731640);
  }

  .show-more {
    @apply max-lg:text-sm text-base box-border
      max-md:-mt-4 mt-4 flex flex-col items-center
      transition-all duration-300 ease-in-out col-span-full m-auto
      hover:text-[#f97316] hover:scale-110;
  }
  .show-more:hover .show-more-text {
    @apply before:pr-5 after:pl-5;
  }

  .show-more-text {
    @apply relative transition-all duration-300 ease-in-out
      before:content-['[']  after:content-[']']
      before:right-full     after:left-full
      before:pr-4           after:pl-4;
  }
  .show-more-text::before, .show-more-text::after {
    @apply transition-all duration-300 ease-in-out top-0
      pointer-events-none select-none inline-block;
  }

  @keyframes anim-blink {
    0%, 49% { visibility: hidden; }
    50%, 99% { visibility: visible; }
  }

  @keyframes anim-gradient {
    0% { background-position: 0 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 200% 50%; }
  }
</style>