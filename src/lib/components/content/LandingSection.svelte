<script lang='ts'>
	import { newTypewriter } from "$lib/stores/typewriter";
	import { width } from "$lib/utils";
	import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { fade, fly, type FadeParams, type FlyParams, type ScaleParams } from "svelte/transition";

	import Envelope from "../icons/Envelope.svelte";
	import GitHub from "../icons/GitHub.svelte";
	import LinkedIn from "../icons/LinkedIn.svelte";

  import ChevronDown from "@lucide/svelte/icons/chevron-down";

  let mounted = $state(false);
  let startBlinking = $state<boolean>(false);

  onMount(() => {
    mounted = true;
  });

  const widthTransition: ScaleParams = {
    delay: 100, duration: 400, easing: cubicInOut
  };
  const flyTransitionTop: FlyParams = {
    y: 35, delay: 400, duration: 600, easing: cubicInOut
  };
  const flyTransitionBot: FlyParams = {
    y: -35, delay: 800, duration: 600, easing: cubicInOut
  };
  const fadeTransitionIcons: FadeParams = {
    delay: 1200, duration: 600, easing: cubicInOut
  };
  const flyTransitionLeft: FlyParams = {
    x: 48, delay: 1200, duration: 600, easing: cubicInOut
  };
  const flyTransitionRight: FlyParams = {
    x: -48, delay: 1200, duration: 600, easing: cubicInOut
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
    typeSpeed: 40,
    typeCooldown: 4000,
  });

</script>

{#if mounted}
<section class='landing-section' id='landing'>
  <div class='flex-grow'>
    <div class='flex items-center'>
      <p class='angle-bracket'>&lt;</p>
      <div class='name-container' transition:width={widthTransition}>
        <p class='sub-name top' transition:fly={flyTransitionTop}>
          Hi, I'm
        </p>

        <p class='name'>Bar Goldenstein</p>

        <p
          class='sub-name bottom cursor'
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
    <div transition:fly={flyTransitionLeft}>
      <LinkedIn href='https://www.linkedin.com/in/bar-goldenstein' />
    </div>
    <div transition:fade={fadeTransitionIcons}>
      <GitHub href='https://github.com/DetKewlDog' />
    </div>
    <div transition:fly={flyTransitionRight}>
      <Envelope href='mailto:bargolden12@gmail.com' />
    </div>
  </div>

  <a class='sub-name about' href='#about' transition:fade={fadeTransitionIcons}>
    <p>[ Learn More ]</p>

    <ChevronDown size={20} />
  </a>
</section>
{/if}

<style lang='postcss'>
  .landing-section {
    @apply flex flex-col justify-between items-center h-full py-32 gap-6;
  }

  .angle-bracket {
    @apply max-md:text-lg max-lg:text-2xl text-4xl font-firacode font-semibold
      text-slate-700 max-md:mx-3 max-lg:mx-6 mx-12 tracking-wide
      select-none pointer-events-none;
  }

  .angle-bracket:first-of-type {
    text-shadow: 2px 0 6px #50505080;
  }
  .angle-bracket:first-of-type::after { /* alignment */
    @apply content-['/'] invisible;
  }
  .angle-bracket:last-of-type {
    text-shadow: -2px 0 6px #50505080;
  }

  .name-container p {
    @apply whitespace-nowrap text-nowrap transition-all duration-300;
    filter: drop-shadow(4px 4px 4px #00000080);
  }

  .name {
    @apply font-title font-bold max-md:text-4xl max-lg:text-6xl text-8xl
      pb-4 !bg-clip-text text-transparent relative z-20 transition-all duration-300;
    background: linear-gradient(90deg, #f97316, #faad28, #f97316);
    background-size: 200% 200%;
    animation: anim-gradient 2s linear infinite forwards;
  }

  .sub-name {
    @apply font-firacode font-semibold relative z-10 w-fit;
    text-shadow: 4px 4px 4px #00000080;
  }

  .sub-name.top {
    @apply max-md:text-sm max-lg:text-xl text-4xl mr-8 justify-self-end;
  }
  .sub-name.bottom {
    @apply max-md:text-[11.2px] max-md:leading-[15px] max-lg:text-xl text-2xl -ml-8;
  }
  .sub-name.about {
    @apply max-md:text-sm max-lg:text-lg text-xl
      max-md:-mt-4 mt-4 flex flex-col items-center
      md:gap-2 lg:gap-1 hover:text-[#f97316]
      transition-all duration-300;
  }

  .sub-name.cursor:after {
    @apply absolute content-['']
      h-6 w-2 m-1 bg-white
      max-lg:h-[18px] max-lg:w-1.5 max-lg:m-[3px]
      max-md:h-3 max-md:w-1 max-md:m-0.5;
    box-shadow: 4px 4px 4px #00000080;
  }
  .sub-name.cursor.blink:after {
    animation: anim-blink 1s infinite;
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