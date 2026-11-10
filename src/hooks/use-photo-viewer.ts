import { useCallback } from "react";
import { useGallery } from "./use-gallery";
import { useLightbox } from "./use-lightbox";

export function usePhotoViewer<T>(items: T[]) {
  const gallery = useGallery(items);
  const { select, next, previous } = gallery;
  const { open, show, close, dialog, swipe } = useLightbox(next, previous);
  const openAt = useCallback(
    (index: number, target: HTMLElement) => {
      select(index);
      show(target);
    },
    [select, show],
  );
  return { ...gallery, open, close, dialog, swipe, openAt };
}
