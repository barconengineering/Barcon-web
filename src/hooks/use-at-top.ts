import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function useAtTop(offset = 24) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY < offset,
    () => true,
  );
}
