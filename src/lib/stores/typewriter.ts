import { readonly, writable, type Readable } from "svelte/store";
import { sleep } from "../utils";


interface TypeWriterParams {
  prefix?: string;
  options: string[];
  suffix?: string;
  typeInterval: number;
  typeCooldown: number;
}

export function newTypewriter({
  prefix = '',
  suffix = '',
  typeInterval,
  typeCooldown,
  options,
}: TypeWriterParams): [Readable<string>, Readable<boolean>] {
  const currentText = writable<string>(prefix + options[0] + suffix);
  const isTyping = writable<boolean>(false);

  function setText(value: string) {
    currentText.set(prefix + value);
  }

  async function typewriterLoop() {
    let index = 0;
    let isFirstTime = true;

    while (true) {
      isTyping.set(false);
      if (options[index] || isFirstTime)
        await sleep(typeCooldown);
      isTyping.set(true);

      isFirstTime = false;

      const word = options[index] + suffix;

      // erase
      for (let i = word.length; i >= 0; i--) {
        setText(word.slice(0, i));
        await sleep(typeInterval);
      }

      // next word
      index = (index + 1) % options.length;
      const nextWord = options[index] + suffix;

      // type
      for (let i = 0; i <= nextWord.length; i++) {
        setText(nextWord.slice(0, i));
        await sleep(typeInterval);
      }
    }
  }

  typewriterLoop();

  return [readonly(currentText), readonly(isTyping)];
}