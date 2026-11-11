import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
} from "react";

export function useServiceScroll(count: number, initial = 0) {
  const list = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(initial);
  const [warm, setWarm] = useState(
    () => new Set([initial, (initial + 1) % count]),
  );

  const activate = useCallback(
    (index: number) => {
      setActive(index);
      setWarm((current) => {
        const wanted = [index, Math.min(index + 1, count - 1)];
        const missing = wanted.filter((item) => !current.has(item));
        return missing.length ? new Set([...current, ...missing]) : current;
      });
    },
    [count],
  );

  useEffect(() => {
    const node = list.current;
    if (!node) return;
    const items = Array.from(node.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            activate(items.indexOf(entry.target as HTMLElement));
        }),
      { rootMargin: "-50% 0px -50% 0px" },
    );
    items.forEach((item) => observer.observe(item));

    let frame = 0;
    let start = 0;
    let span = 1;
    const update = () => {
      frame = 0;
      const middle = window.scrollY + window.innerHeight / 2;
      const progress = Math.min(1, Math.max(0, (middle - start) / span));
      node.style.setProperty("--service-progress", progress.toFixed(4));
    };
    const measure = () => {
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      start = first.getBoundingClientRect().top + window.scrollY;
      span = Math.max(
        1,
        last.getBoundingClientRect().bottom + window.scrollY - start,
      );
      update();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = new ResizeObserver(measure);
    resize.observe(node);
    resize.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      observer.disconnect();
      resize.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
    };
  }, [activate]);

  const itemProps = (index: number) => ({
    "data-active": index === active || undefined,
    onFocus: (event: FocusEvent<HTMLElement>) => {
      activate(index);
      if (!event.currentTarget.matches(":focus-visible")) return;
      event.currentTarget.scrollIntoView({
        block: "center",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches
          ? "auto"
          : "smooth",
      });
    },
  });

  return {
    list,
    active,
    isWarm: (index: number) => warm.has(index),
    itemProps,
  };
}
