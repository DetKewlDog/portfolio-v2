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

export function toDateString(date: Date | null): string | null {
  if (!date)
    return null;

  const formatter = new Intl.DateTimeFormat('en-IL', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  });
  return formatter.format(date);
}