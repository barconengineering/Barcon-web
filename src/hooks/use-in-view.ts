import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element>(revealRatio = 0.2) {
  const ref = useRef<T>(null);
  const [state, setState] = useState({
    ready: false,
    inView: false,
    seen: false,
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setState((current) => ({
          ready: true,
          inView: entry.isIntersecting,
          seen:
            current.seen ||
            (entry.isIntersecting && entry.intersectionRatio >= revealRatio),
        })),
      { threshold: [0, revealRatio] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [revealRatio]);

  return { ref, ...state };
}
