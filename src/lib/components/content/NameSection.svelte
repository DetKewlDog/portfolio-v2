<script lang='ts'>
	import { newTypewriter } from "$lib/stores/typewriter";
	import { width } from "$lib/utils";
	import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { fly } from "svelte/transition";

  let mounted = $state(false);
  let startBlinking = $state<boolean>(false);

  onMount(() => {
    mounted = true;
  });

  const speed = 1;

  const nameDuration = 400 * speed;
  const subNameDuration = 600 * speed;
  const initialDelay = 100 * speed;
  const subNameBotDelay = initialDelay + nameDuration + 300 * speed;

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
  <p class='angle-bracket'>&lt;</p>
  <div class='name-container' transition:width={{ delay: initialDelay, duration: nameDuration, easing: cubicInOut }}>
    <p
      class='sub-name max-md:text-sm text-4xl mr-8 justify-self-end'
      transition:fly={{
        y: 35,
        delay: nameDuration,
        duration: subNameDuration,
        easing: cubicInOut
      }}
    >
      Hi, I'm
    </p>

    <p class='name'>Bar Goldenstein</p>

    <p
      class='sub-name max-md:text-[11.2px] max-md:leading-[15px] text-2xl -ml-8 cursor'
      class:blink={!$isTyping && startBlinking}
      transition:fly={{
        y: -35,
        delay: subNameBotDelay,
        duration: subNameDuration,
        easing: cubicInOut
      }}
      onintrostart={() => startBlinking = true}
    >
      {$typewriter}
    </p>
  </div>
  <p class='angle-bracket'>/&gt;</p>
{/if}

<style lang='postcss'>
  .angle-bracket {
    @apply max-md:text-lg text-4xl font-consolas font-semibold
      text-slate-700 max-md:mx-3 mx-12 tracking-wide;
  }

  .angle-bracket:first-of-type {
    text-shadow: 2px 0 6px #50505080;
  }
  .angle-bracket:last-of-type {
    text-shadow: -2px 0 6px #50505080;
  }

  .name-container > p {
    @apply whitespace-nowrap text-nowrap;
    filter: drop-shadow(4px 4px 4px #00000080);
  }

  .name {
    @apply font-segoe-ui font-bold max-md:text-4xl text-8xl
      pb-4 !bg-clip-text text-transparent relative z-20;
    background: linear-gradient(90deg, #f97316, #faad28, #f97316);
    background-size: 200% 200%;
    animation: anim-gradient 2s linear infinite forwards;
  }

  .sub-name {
    @apply font-consolas font-semibold relative z-10 w-fit;
    text-shadow: 4px 4px 4px #00000080;
  }

  .sub-name.cursor:after {
    @apply absolute content-[''] h-6 w-2 m-1
      max-md:h-3 max-md:w-1 max-md:m-0.5 bg-white;
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