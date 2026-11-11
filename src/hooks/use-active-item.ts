import { useState, type PointerEvent } from "react";

export function useActiveItem(initial = 0) {
  const [active, setActive] = useState(initial);
  const itemProps = (index: number) => ({
    "aria-pressed": active === index,
    onClick: () => setActive(index),
    onFocus: () => setActive(index),
    onPointerEnter: (event: PointerEvent<HTMLElement>) => {
      if (event.pointerType === "mouse") setActive(index);
    },
  });
  return { active, itemProps };
}
