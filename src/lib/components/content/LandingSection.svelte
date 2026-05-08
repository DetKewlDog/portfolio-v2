<script lang='ts'>
	import { newTypewriter } from "$lib/stores/typewriter";
	import { width } from "$lib/utils";
	import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { fade, fly, type FadeParams, type FlyParams, type ScaleParams } from "svelte/transition";

	import Envelope from "../icons/Envelope.svelte";
	import GitHub from "../icons/GitHub.svelte";
	import LinkedIn from "../icons/LinkedIn.svelte";
	import ChevronDown from "../icons/ChevronDown.svelte";

  let mounted = $state(false);
  let startBlinking = $state<boolean>(false);

  onMount(() => {
    mounted = true;
  });

  const widthTransition: ScaleParams = {
    duration: 400, easing: cubicInOut
  };
  const flyTransitionTop: FlyParams = {
    delay: 200, duration: 600, easing: cubicInOut, y: 35
  };
  const flyTransitionBot: FlyParams = {
    delay: 600, duration: 600, easing: cubicInOut, y: -35
  };
  const fadeTransitionIcons: FadeParams = {
    delay: 800, duration: 600, easing: cubicInOut
  };
  const flyTransitionLeft: FlyParams = {
    delay: 800, duration: 600, easing: cubicInOut, x: 48
  };
  const flyTransitionRight: FlyParams = {
    delay: 800, duration: 600, easing: cubicInOut, x: -48
  };

  let [typewriter, isTyping] = newTypewriter({
    prefix: 'I develop ',
    options: [
      'full stack applications',
      'security investigation platforms',
      'responsive web applications',
      'workflow automations',
      'games'
    ],
    suffix: '.',
    typeInterval: 35,
    typeCooldown: 3000,
  });

</script>

{#if mounted}
<section class='landing-section' id='landing'>
  <div class='flex-grow'>
    <div class='flex items-center'>
      <p class='angle-bracket'>&lt;</p>
      <div class='name-container' transition:width={widthTransition}>
        <p class='mono-text top-text' transition:fly={flyTransitionTop}>
          Hi, I'm
        </p>

        <p class='name'>Bar Goldenstein</p>

        <p
          class='mono-text bottom-text cursor'
          class:blink={!$isTyping && startBlinking}
          transition:fly={flyTransitionBot}
          onintrostart={() => startBlinking = true}
        >
          {$typewriter}
        </p>
      </div>
      <p class='angle-bracket'>/&gt;</p>
    </div>
  </div>

  <div class='flex max-lg:gap-4 gap-8'>
    <div class='social-link' transition:fly={flyTransitionLeft}>
      <LinkedIn href='https://www.linkedin.com/in/bar-goldenstein' label='LinkedIn' />
    </div>
    <div class='social-link' transition:fade={fadeTransitionIcons}>
      <GitHub href='https://github.com/DetKewlDog' label='GitHub' />
    </div>
    <div class='social-link' transition:fly={flyTransitionRight}>
      <Envelope href='mailto:bargolden12@gmail.com' label='Mail' />
    </div>
  </div>

  <a class='mono-text learn-more' href='#about' transition:fade={fadeTransitionIcons}>
    <p class='learn-more-text'>
      Learn More
    </p>

    <ChevronDown size={20} label='Learn More' class='animate-bounce' />
  </a>
</section>
{/if}

<style lang='postcss'>
  .landing-section {
    @apply flex flex-col justify-between items-center h-full py-32 gap-6;
  }

  .angle-bracket {
    @apply max-md:text-lg max-lg:text-2xl text-4xl
      font-firacode font-semibold text-slate-700
      max-md:mx-3 max-lg:mx-6 mx-12 tracking-wide
      select-none pointer-events-none
      first-of-type:[text-shadow:2px_0_6px_#50505080]
      last-of-type:[text-shadow:-2px_0_6px_#50505080]
      first-of-type:after:content-['/']
      first-of-type:after:invisible;
  }

  .name-container p {
    @apply whitespace-nowrap text-nowrap drop-shadow-lg
      transition-all duration-300 ease-in-out;
  }

  .name {
    @apply font-title font-bold pb-4
      max-md:text-4xl max-lg:text-6xl text-8xl
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

  .top-text {
    @apply max-md:text-sm max-lg:text-xl text-4xl mr-8 justify-self-end;
  }
  .bottom-text {
    @apply max-lg:text-xl text-2xl -ml-8
      max-md:text-[11.2px] max-md:leading-[15px];
  }

  .cursor:after {
    @apply absolute content-['']
      max-lg:h-[18px] max-lg:w-1.5 max-lg:m-[3px]
      max-md:h-3 max-md:w-1 max-md:m-0.5
      h-6 w-2 m-1 bg-white;
    box-shadow: 4px 4px 4px #00000080;
  }
  .cursor.blink:after {
    animation: anim-blink .8s infinite;
  }

  .social-link {
    @apply hover:text-[#f97316] hover:scale-125
      transition-all duration-300 ease-in-out;
  }
  .social-link:hover, .learn-more:hover {
    filter: drop-shadow(0 0 2px #f9731640);
  }

  .learn-more {
    @apply max-md:text-sm max-lg:text-lg text-xl box-border
      max-md:-mt-4 mt-4 flex flex-col items-center
      transition-all duration-300 ease-in-out
      gap-2 hover:text-[#f97316] hover:scale-110;
  }
  .learn-more:hover .learn-more-text {
    @apply before:pr-5 after:pl-5;
  }

  .learn-more-text {
    @apply relative transition-all duration-300 ease-in-out
      before:content-['[']  after:content-[']']
      before:right-full     after:left-full
      before:pr-4           after:pl-4;
  }
  .learn-more-text::before, .learn-more-text::after {
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