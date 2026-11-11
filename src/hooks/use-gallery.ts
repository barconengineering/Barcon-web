import { useCallback, useState } from "react";

const maxTiles = 5;

export function useGallery<T>(items: T[]) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const select = useCallback((next: number) => setIndex(next), []);
  const next = useCallback(
    () => setIndex((current) => (current + 1) % count),
    [count],
  );
  const previous = useCallback(
    () => setIndex((current) => (current - 1 + count) % count),
    [count],
  );
  const tiles = items.slice(0, maxTiles);
  const extra = count - tiles.length;

  return {
    index,
    current: items[index],
    total: count,
    many: count > 1,
    tiles,
    extra,
    moreAt: extra > 0 ? tiles.length - 1 : -1,
    moreLabel: `+${extra} ${extra === 1 ? "photo" : "photos"}`,
    layout: tiles.length,
    select,
    next,
    previous,
  };
}
