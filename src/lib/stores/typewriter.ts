import { readonly, writable, type Readable } from "svelte/store";
import { sleep } from "../utils";


interface TypeWriterParams {
  prefix?: string;
  options: string[];
  suffix?: string;
  typeSpeed: number;
  typeCooldown: number;
}

export function newTypewriter({
  prefix = '',
  suffix = '',
  typeSpeed,
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

    while (true) {
      isTyping.set(false);
      await sleep(typeCooldown);
      isTyping.set(true);

      const word = options[index] + '.';

      // erase
      for (let i = word.length; i >= 0; i--) {
        setText(word.slice(0, i));
        await sleep(typeSpeed);
      }

      // next word
      index = (index + 1) % options.length;
      const nextWord = options[index] + '.';

      // type
      for (let i = 0; i <= nextWord.length; i++) {
        setText(nextWord.slice(0, i));
        await sleep(typeSpeed);
      }
    }
  }

  typewriterLoop();

  return [readonly(currentText), readonly(isTyping)];
}