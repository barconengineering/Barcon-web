import { useEffect, useRef } from "react";

const tiltable =
  "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export function useTilt<A extends HTMLElement, T extends HTMLElement>(
  max = 5,
) {
  const area = useRef<A>(null);
  const target = useRef<T>(null);

  useEffect(() => {
    const zone = area.current;
    const node = target.current;
    if (!zone || !node) return;
    const query = window.matchMedia(tiltable);
    const clamp = (value: number) => Math.max(-1, Math.min(1, value));
    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      node.style.setProperty("--tilt-x", `${(x * max).toFixed(2)}deg`);
      node.style.setProperty("--tilt-y", `${(-y * max).toFixed(2)}deg`);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !query.matches) return;
      const rect = zone.getBoundingClientRect();
      x = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1);
      y = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1);
      schedule();
    };
    const reset = () => {
      x = 0;
      y = 0;
      schedule();
    };

    zone.addEventListener("pointermove", move);
    zone.addEventListener("pointerleave", reset);
    query.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      zone.removeEventListener("pointermove", move);
      zone.removeEventListener("pointerleave", reset);
      query.removeEventListener("change", reset);
      node.style.removeProperty("--tilt-x");
      node.style.removeProperty("--tilt-y");
    };
  }, [max]);

  return { area, target };
}
