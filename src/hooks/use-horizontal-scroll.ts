import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
} from "react";

const scrollDriven =
  "(min-width: 768px) and (prefers-reduced-motion: no-preference)";
const reducedMotion = "(prefers-reduced-motion: reduce)";

export function useHorizontalScroll(count: number) {
  const section = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const metrics = useRef({ start: 0, distance: 0 });
  const [index, setIndex] = useState(0);
  const last = Math.max(count - 1, 1);

  useEffect(() => {
    const outer = section.current;
    const sticky = viewport.current;
    const row = track.current;
    if (!outer || !sticky || !row) return;
    const driven = window.matchMedia(scrollDriven);
    let frame = 0;

    const update = () => {
      frame = 0;
      let progress = 0;
      if (driven.matches) {
        const { start, distance } = metrics.current;
        if (distance > 0)
          progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
        row.style.transform = `translate3d(${-progress * last * 100}%, 0, 0)`;
      } else if (row.clientWidth) {
        progress = Math.min(1, row.scrollLeft / row.clientWidth / last);
      }
      if (bar.current)
        bar.current.style.transform = `scaleX(${(progress * last + 1) / count})`;
      setIndex(Math.round(progress * last));
    };

    const measure = () => {
      if (driven.matches) {
        const offset = parseFloat(getComputedStyle(sticky).top) || 0;
        metrics.current = {
          start: outer.getBoundingClientRect().top + window.scrollY - offset,
          distance: outer.offsetHeight - sticky.offsetHeight,
        };
      } else {
        row.style.transform = "";
      }
      update();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const resize = new ResizeObserver(measure);
    resize.observe(outer);
    resize.observe(sticky);
    resize.observe(document.body);
    driven.addEventListener("change", measure);
    window.addEventListener("scroll", schedule, { passive: true });
    row.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      driven.removeEventListener("change", measure);
      window.removeEventListener("scroll", schedule);
      row.removeEventListener("scroll", schedule);
      row.style.transform = "";
    };
  }, [count, last]);

  const scrollToPanel = useCallback(
    (target: number) => {
      const row = track.current;
      if (!row || count === 0) return;
      const panel = Math.min(count - 1, Math.max(0, target));
      const behavior = window.matchMedia(reducedMotion).matches
        ? "auto"
        : "smooth";
      if (window.matchMedia(scrollDriven).matches) {
        const { start, distance } = metrics.current;
        window.scrollTo({ top: start + (panel / last) * distance, behavior });
      } else {
        row.scrollTo({ left: panel * row.clientWidth, behavior });
      }
    },
    [count, last],
  );

  const onFocus = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      if (!window.matchMedia(scrollDriven).matches) return;
      const panels = Array.from(track.current?.children ?? []);
      const panel = panels.findIndex((child) => child.contains(event.target));
      if (panel >= 0) scrollToPanel(panel);
    },
    [scrollToPanel],
  );

  const pad = (value: number) => String(value).padStart(2, "0");

  return {
    section,
    viewport,
    track,
    bar,
    index,
    counter: `${pad(index + 1)} / ${pad(count)}`,
    slideLabel: (slide: number) => `${slide + 1} of ${count}`,
    next: () => scrollToPanel(index + 1),
    previous: () => scrollToPanel(index - 1),
    onFocus,
  };
}
