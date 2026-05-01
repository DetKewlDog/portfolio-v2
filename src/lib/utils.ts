import { cubicOut } from "svelte/easing";
import type { ScaleParams } from "svelte/transition";

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export function width(node: HTMLElement, params: ScaleParams) {
  const width = node.offsetWidth;
  return {
    duration: params.duration,
    delay: params.delay,
    css: (t: number) => {
      const eased = (params.easing ?? cubicOut)(t);
      return `width: ${eased * width}px`;
    }
  };
}