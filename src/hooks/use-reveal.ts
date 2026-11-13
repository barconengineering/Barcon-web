import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function useReveal<T extends Element>(revealRatio = 0.15) {
  const reducedMotion = useReducedMotion();
  const { ref, ready, seen } = useInView<T>(revealRatio);
  const state = reducedMotion || !ready ? undefined : seen ? "in" : "out";
  return { ref, state };
}
