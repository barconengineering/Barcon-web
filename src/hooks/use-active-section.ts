import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function useActiveSection(ids: string[]) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  const reducedMotion = useReducedMotion();
  const key = ids.join(" ");

  useEffect(() => {
    const targets = key.split(" ").map((id) => document.getElementById(id)).filter((node) => node !== null);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(targets.indexOf(entry.target as HTMLElement));
      }),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [key]);

  useEffect(() => {
    const node = track.current;
    const link = node?.children[active] as HTMLElement | undefined;
    if (!node || !link) return;
    node.scrollTo({
      left: link.offsetLeft - (node.clientWidth - link.offsetWidth) / 2,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [active, reducedMotion]);

  return { track, active };
}
